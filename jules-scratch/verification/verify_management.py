from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:3000")

    # Uncheck all categories first
    toggle_all_button = page.get_by_role("button", name="Toggle All")
    toggle_all_button.click()

    if page.locator('input[type="checkbox"]:checked').count() > 1:
        toggle_all_button.click()


    # Find and click the "Management" category label
    management_label = page.locator('label[for="Management"]')
    expect(management_label).to_be_visible()
    management_label.click()

    # Wait for the heading to appear
    page.wait_for_selector('div[data-slot="card-title"]:has-text("The Peter Principle")')

    # Check that the "The Peter Principle" model is displayed
    peter_principle_heading = page.get_by_role("heading", name="The Peter Principle")
    expect(peter_principle_heading).to_be_visible()

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
