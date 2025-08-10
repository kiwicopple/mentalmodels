"use client";

import { useMentalModels } from "../context/mental-models-context";
import { CategoryName, CATEGORIES } from "../types/mental-models";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { selectedCategories, updateCategoriesAndURL, models } =
    useMentalModels();

  const handleCategoryChange = (category: CategoryName, checked: boolean) => {
    if (checked) {
      updateCategoriesAndURL([...selectedCategories, category]);
    } else {
      updateCategoriesAndURL(selectedCategories.filter((c) => c !== category));
    }
  };

  const toggleAll = () => {
    if (selectedCategories.length === CATEGORIES.length) {
      updateCategoriesAndURL([]);
    } else {
      updateCategoriesAndURL([...CATEGORIES]);
    }
  };

  const getCategoryCount = (category: CategoryName) => {
    return models.filter((m) => m.category === category).length;
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-4/5 max-w-[450px] bg-background border-r shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-80 md:shadow-none`}
      >
        <div className="p-6 space-y-6 h-full overflow-y-auto">
          {/* Close button */}
          <div className="flex justify-end md:hidden">
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Category Filter */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start p-2 hover:bg-accent"
              onClick={toggleAll}
            >
              Toggle All
            </Button>
            <div className="space-y-2">
              {CATEGORIES.map((category) => (
                <div key={category} className="flex items-center space-x-2 p-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) =>
                      handleCategoryChange(category, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={category}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {category} ({getCategoryCount(category)})
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground">
              About
            </h3>
            <div className="text-sm text-muted-foreground space-y-3">
              <p>
                Mental models are &quot;core concepts&quot;. They unchanging
                fundamentals for a particular subject. Learning these concepts
                will give you a better comprehension of the world and help you
                make rational decisions.
              </p>
              <p>
                This app is a shuffled list of {models.length} mental models,
                grouped into {CATEGORIES.length} color-coded categories.
              </p>
              <p>
                Try to do a few each day. Spaced repetition will help you
                remember. If you are using a mobile you can add this page to
                your homescreen and use it offline.
              </p>
            </div>
          </div>

          {/* Acknowledgements */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground">
              Acknowledgements
            </h3>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Credit for models</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <a
                    href="https://www.farnamstreetblog.com/mental-models/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Farnam Street
                  </a>
                </li>
                <li>
                  <a
                    href="https://yourlogicalfallacyis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Your Logical Fallacy Is
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Source Code */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground">
              Source Code
            </h3>
            <p className="text-sm text-muted-foreground">
              You can find the source code for this app on{" "}
              <a
                href="https://github.com/kiwicopple/mentalmodels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
