import { MentalModel } from "../types/mental-models";

export const logicalFallacies: MentalModel[] = [
  {
    name: "Strawman",
    category: "Logical Fallacies",
    description: `Misrepresenting someone's argument to make it easier to attack.
By exaggerating, misrepresenting, or just completely fabricating someone's argument, it's much easier to present your own position as being reasonable, but this kind of dishonesty serves to undermine honest rational debate.

Example: After Will said that we should put more money into health and education, Warren responded by saying that he was surprised that Will hates our country so much that he wants to leave it defenceless by cutting military spending.`,
    author: "model",
    slug: 'strawman',
    nameSw: "Mtu wa Nyasi (Strawman)",
    descriptionSw: `Kupotosha hoja ya mtu mwingine ili iwe rahisi kushambulia.
Kwa kutilia chumvi, kupotosha, au kutengeneza kabisa hoja ya mtu, ni rahisi zaidi kuwasilisha msimamo wako kama wenye busara, lakini aina hii ya udanganyifu hudhoofisha mjadala wa kimantiki wenye uaminifu.

Mfano: Baada ya Will kusema kwamba tunapaswa kuweka pesa zaidi katika afya na elimu, Warren alijibu kwa kusema kwamba anashangaa Will anaichukia nchi yetu sana hivi kwamba anataka kuiacha bila ulinzi kwa kupunguza matumizi ya kijeshi.`,
  },
  {
    name: "False Cause",
    category: "Logical Fallacies",
    description: `Presuming that a real or perceived relationship between things means that one is the cause of the other.
Many people confuse correlation (things happening together or in sequence) for causation (that one thing actually causes the other to happen). Sometimes correlation is coincidental, or it may be attributable to a common cause.

Example: Pointing to a fancy chart, Roger shows how temperatures have been rising over the past few centuries, whilst at the same time the numbers of pirates have been decreasing; thus pirates cool the world and global warming is a hoax.`,
    author: "model",
    slug: 'false-cause',
    nameSw: "Sababu ya Uongo",
    descriptionSw: `Kudhani kwamba uhusiano halisi au unaoonekana kati ya vitu unamaanisha kwamba kimoja ni sababu ya kingine.
Watu wengi huchanganya uwiano (correlation - vitu vinavyotokea pamoja au kwa mfuatano) na usababishaji (causation - kwamba kitu kimoja kweli husababisha kingine kutokea). Wakati mwingine uwiano ni wa bahati mbaya, au unaweza kuhusishwa na sababu ya pamoja.

Mfano: Akionyesha chati ya kifahari, Roger anaonyesha jinsi joto limekuwa likipanda katika karne chache zilizopita, wakati huo huo idadi ya maharamia imekuwa ikipungua; hivyo maharamia wanapoa dunia na ongezeko la joto duniani ni uwongo.`,
  },
  {
    name: "Appeal to Emotion",
    category: "Logical Fallacies",
    description: `Attempting to manipulate an emotional response in place of a valid or compelling argument.
Appeals to emotion include appeals to fear, envy, hatred, pity, pride, and more. It's important to note that sometimes a logically coherent argument may inspire emotion or have an emotional aspect, but the problem and fallacy occurs when emotion is used instead of a logical argument, or to obscure the fact that no compelling rational reason exists for one's position. Everyone, bar sociopaths, is affected by emotion, and so appeals to emotion are a very common and effective argument tactic, but they're ultimately flawed, dishonest, and tend to make one's opponents justifiably emotional.

Example: Luke didn't want to eat his sheep's brains with chopped liver and brussel sprouts, but his father told him to think about the poor, starving children in a third world country who weren't fortunate enough to have any food at all.`,
    author: "model",
    slug: 'appeal-to-emotion',
    nameSw: "Kuomba Hisia",
    descriptionSw: `Kujaribu kudhibiti mwitikio wa kihisia badala ya hoja halali au yenye nguvu.
Kukata rufaa kwa hisia kunajumuisha rufaa kwa hofu, wivu, chuki, huruma, kiburi, na zaidi. Ni muhimu kutambua kwamba wakati mwingine hoja yenye mantiki inaweza kuamsha hisia au kuwa na kipengele cha kihisia, lakini tatizo na upotofu hutokea wakati hisia zinatumika badala ya hoja ya kimantiki, au kuficha ukweli kwamba hakuna sababu ya kimantiki yenye nguvu ya msimamo wa mtu. Kila mtu, isipokuwa watu wenye tatizo la kijamii (sociopaths), huathiriwa na hisia, na hivyo kukata rufaa kwa hisia ni mbinu ya kawaida na yenye ufanisi ya mabishano, lakini hatimaye ni yenye kasoro, isiyo ya uaminifu, na huelekea kuwafanya wapinzani wa mtu kuwa na hisia kwa haki.

Mfano: Luke hakutaka kula ubongo wa kondoo wake pamoja na maini yaliyokatwa na mimea ya brussels, lakini baba yake alimwambia awafikirie watoto maskini wenye njaa katika nchi ya dunia ya tatu ambao hawakuwa na bahati ya kuwa na chakula chochote.`,
  },
  {
    name: "The Fallacy Fallacy",
    category: "Logical Fallacies",
    description: `Presuming that because a claim has been poorly argued, or a fallacy has been made, that the claim itself must be wrong.
It is entirely possible to make a claim that is false yet argue with logical coherency for that claim, just as it is possible to make a claim that is true and justify it with various fallacies and poor arguments.

Example: Recognising that Amanda had committed a fallacy in arguing that we should eat healthy food because a nutritionist said it was popular, Alyse said we should therefore eat bacon double cheeseburgers every day.`,
    author: "model",
    slug: 'the-fallacy-fallacy',
    nameSw: "Upotofu wa Upotofu",
    descriptionSw: `Kudhani kwamba kwa sababu dai fulani limebishaniwa vibaya, au upotofu umetokea, basi dai lenyewe lazima liwe si sahihi.
Inawezekana kabisa kutoa dai ambalo ni la uongo lakini ubishane kwa mantiki thabiti kwa dai hilo, kama ilivyo pia inawezekana kutoa dai la kweli na kulithibitisha kwa upotofu mbalimbali na hoja dhaifu.

Mfano: Alipotambua kwamba Amanda alifanya upotofu kwa kusema tunapaswa kula chakula chenye afya kwa sababu mtaalamu wa lishe alisema kilikuwa maarufu, Alyse alisema kwa hiyo tunapaswa kula cheeseburgers mbili za bacon kila siku.`,
  },
  {
    name: "Slippery Slope",
    category: "Logical Fallacies",
    description: `Saying that if we allow A to happen, then Z will eventually happen too, therefore A should not happen.
The problem with this reasoning is that it avoids engaging with the issue at hand, and instead shifts attention to extreme hypotheticals. Because no proof is presented to show that such extreme hypotheticals will in fact occur, this fallacy has the form of an appeal to emotion fallacy by leveraging fear. In effect the argument at hand is unfairly tainted by unsubstantiated conjecture.

Example: Colin Closet asserts that if we allow same-sex couples to marry, then the next thing we know we'll be allowing people to marry their parents, their cars and even monkeys.`,
    author: "model",
    slug: 'slippery-slope',
    nameSw: "Mteremko Mtelezi",
    descriptionSw: `Kusema kwamba ikiwa tunaruhusu A kutokea, basi Z pia hatimaye itatokea, kwa hiyo A haipaswi kutokea.
Tatizo la hoja hii ni kwamba inaepuka kukabiliana na suala lililopo, na badala yake inaelekeza mawazo kwenye dhana za kikubwa kupita kiasi. Kwa sababu hakuna uthibitisho unaotolewa kuonyesha kwamba dhana hizo za kikubwa zitatokea kweli, upotofu huu una umbo la upotofu wa kuomba hisia kwa kutumia hofu. Kimsingi hoja iliyopo imechafushwa isivyo haki na dhana isiyo na uthibitisho.

Mfano: Colin Closet anadai kwamba ikiwa tunaruhusu wapenzi wa jinsia moja kuoana, basi kinachofuata tutaruhusu watu kuoana na wazazi wao, magari yao na hata nyani.`,
  },
  {
    name: "Ad Hominem",
    category: "Logical Fallacies",
    description: `Attacking your opponent's character or personal traits in an attempt to undermine their argument.
Ad hominem attacks can take the form of overtly attacking somebody, or more subtly casting doubt on their character or personal attributes as a way to discredit their argument. The result of an ad hom attack can be to undermine someone's case without actually having to engage with it.

Example: After Sally presents an eloquent and compelling case for a more equitable taxation system, Sam asks the audience whether we should believe anything from a woman who isn't married, was once arrested, and smells a bit weird.`,
    author: "model",
    slug: 'ad-hominem',
    nameSw: "Kushambulia Mtu (Ad Hominem)",
    descriptionSw: `Kushambulia tabia au sifa za kibinafsi za mpinzani wako kwa kujaribu kudhoofisha hoja yake.
Mashambulizi ya ad hominem yanaweza kuwa katika umbo la kumshambulia mtu waziwazi, au kwa hila kuweka shaka juu ya tabia yake au sifa zake za kibinafsi kama njia ya kudhalilisha hoja yake. Matokeo ya shambulio la ad hominem yanaweza kuwa kudhoofisha kesi ya mtu bila kushughulikia hoja yenyewe.

Mfano: Baada ya Sally kuwasilisha kesi yenye ufasaha na yenye nguvu ya mfumo wa kodi wenye usawa zaidi, Sam anaiuliza hadhira kama tunapaswa kuamini chochote kutoka kwa mwanamke ambaye hajaolewa, aliwahi kukamatwa, na ananuka kidogo isivyo kawaida.`,
  },
  {
    name: "Tu Quoque",
    category: "Logical Fallacies",
    description: `Avoiding having to engage with criticism by turning it back on the accuser - you answered criticism with criticism.
Pronounced too-kwo-kwee. Literally translating as 'you too' this fallacy is also known as the appeal to hypocrisy. It is commonly employed as an effective red herring because it takes the heat off someone having to defend their argument, and instead shifts the focus back on to the person making the criticism.

Example: Nicole identified that Hannah had committed a logical fallacy, but instead of addressing the substance of her claim, Hannah accused Nicole of committing a fallacy earlier on in the conversation.`,
    author: "model",
    slug: 'tu-quoque',
    nameSw: "Wewe Pia (Tu Quoque)",
    descriptionSw: `Kuepuka kukabiliana na ukosoaji kwa kuurudisha kwa mshtaki - unajibu ukosoaji kwa ukosoaji.
Inatamkwa too-kwo-kwee. Kwa tafsiri halisi 'wewe pia', upotofu huu unajulikana pia kama rufaa kwa unafiki. Unatumika kwa kawaida kama 'red herring' yenye ufanisi kwa sababu unaondoa shinikizo kwa mtu kulazimika kutetea hoja yake, na badala yake unaelekeza mawazo kwa mtu anayetoa ukosoaji.

Mfano: Nicole alitambua kwamba Hannah alifanya upotofu wa kimantiki, lakini badala ya kushughulikia kiini cha dai lake, Hannah alimshtaki Nicole kwa kufanya upotofu mapema katika mazungumzo.`,
  },
  {
    name: "Personal Incredulity",
    category: "Logical Fallacies",
    description: `Because you found something difficult to understand, or are unaware of how it works, you make out like it's probably not true.
Complex subjects like biological evolution through natural selection require some amount of understanding before one is able to make an informed judgement about the subject at hand; this fallacy is usually used in place of that understanding.

Example: Kirk drew a picture of a fish and a human and with effusive disdain asked Richard if he really thought we were stupid enough to believe that a fish somehow turned into a human through just, like, random things happening over time.`,
    author: "model",
    slug: 'personal-incredulity',
    nameSw: "Kutokuamini kwa Kibinafsi",
    descriptionSw: `Kwa sababu umekuta jambo gumu kuelewa, au hujui linafanyaje kazi, unafanya kana kwamba labda si kweli.
Masomo tata kama mageuzi ya kibayolojia kupitia uteuzi wa asili yanahitaji kiwango fulani cha uelewa kabla ya mtu kuweza kutoa uamuzi wenye taarifa kuhusu suala lililopo; upotofu huu kwa kawaida hutumika badala ya uelewa huo.

Mfano: Kirk alichora picha ya samaki na binadamu na kwa dharau kubwa akamuuliza Richard kama kweli anafikiri tulikuwa wapumbavu vya kutosha kuamini kwamba samaki kwa namna fulani aligeuka kuwa binadamu kupitia tu, kama, mambo ya nasibu yaliyotokea kwa muda.`,
  },
  {
    name: "Special Pleading",
    category: "Logical Fallacies",
    description: `Moving the goalposts or made up an exception when your claim was shown to be false.
Humans are funny creatures and have a foolish aversion to being wrong. Rather than appreciate the benefits of being able to change one's mind through better understanding, many will invent ways to cling to old beliefs. One of the most common ways that people do this is to post-rationalize a reason why what they thought to be true must remain to be true. It's usually very easy to find a reason to believe something that suits us, and it requires integrity and genuine honesty with oneself to examine one's own beliefs and motivations without falling into the trap of justifying our existing ways of seeing ourselves and the world around us.

Example: Edward Johns claimed to be psychic, but when his 'abilities' were tested under proper scientific conditions, they magically disappeared. Edward explained this saying that one had to have faith in his abilities for them to work.`,
    author: "model",
    slug: 'special-pleading',
    nameSw: "Kutafuta Kisingizio Maalum",
    descriptionSw: `Kubadilisha lengo au kutengeneza ubaguzi wakati dai lako limeonyeshwa kuwa la uongo.
Wanadamu ni viumbe vya kuchekesha na wana chuki ya kipumbavu ya kuwa na makosa. Badala ya kuthamini faida za kuweza kubadilisha mawazo kwa uelewa bora, wengi watatengeneza njia za kushikilia imani za zamani. Mojawapo ya njia za kawaida watu hufanya hivi ni kujenga sababu baada ya ukweli ya kwanini walichofikiri kuwa kweli lazima kiendelee kuwa kweli. Kwa kawaida ni rahisi sana kupata sababu ya kuamini kitu kinachotufaa, na inahitaji uadilifu na uaminifu wa kweli kwa mtu binafsi kuchunguza imani na nia zake bila kuanguka katika mtego wa kuhalalisha njia zetu za sasa za kujiona na kuuona ulimwengu unaotuzunguka.

Mfano: Edward Johns alidai kuwa na nguvu za kusikia (psychic), lakini wakati 'uwezo' wake ulipojaribiwa chini ya masharti sahihi ya kisayansi, ulitoweka kichawi. Edward alieleza hili kwa kusema kwamba mtu alipaswa kuwa na imani katika uwezo wake ili ufanye kazi.`,
  },
  {
    name: "Loaded Question",
    category: "Logical Fallacies",
    description: `Asking a question that had a presumption built into it so that it couldn't be answered without appearing guilty.
Loaded question fallacies are particularly effective at derailing rational debates because of their inflammatory nature - the recipient of the loaded question is compelled to defend themselves and may appear flustered or on the back foot.

Example: Grace and Helen were both romantically interested in Brad. One day, with Brad sitting within earshot, Grace asked in an inquisitive tone whether Helen was still having problems with her drug habit.`,
    author: "model",
    slug: 'loaded-question',
    nameSw: "Swali lenye Mzigo (Loaded Question)",
    descriptionSw: `Kuuliza swali ambalo lina dhana iliyojengwa ndani yake kiasi kwamba haliwezi kujibiwa bila kuonekana kuwa na hatia.
Upotofu wa swali lenye mzigo una ufanisi hasa katika kupotosha mjadala wa kimantiki kwa sababu ya asili yake ya kuchochea - mpokeaji wa swali lenye mzigo analazimika kujitetea na anaweza kuonekana amechanganyikiwa au katika nafasi ya kujitetea.

Mfano: Grace na Helen wote walikuwa wanampenda Brad kimapenzi. Siku moja, Brad akiwa amekaa karibu kiasi cha kusikia, Grace aliuliza kwa sauti ya udadisi kama Helen bado alikuwa na matatizo na tabia yake ya madawa ya kulevya.`,
  },
  {
    name: "Burden of Proof",
    category: "Logical Fallacies",
    description: `Saying that the burden of proof lies not with the person making the claim, but with someone else to disprove.
The burden of proof lies with someone who is making a claim, and is not upon anyone else to disprove. The inability, or disinclination, to disprove a claim does not render that claim valid, nor give it any credence whatsoever. However it is important to note that we can never be certain of anything, and so we must assign value to any claim based on the available evidence, and to dismiss something on the basis that it hasn't been proven beyond all doubt is also fallacious reasoning.

Example: Bertrand declares that a teapot is, at this very moment, in orbit around the Sun between the Earth and Mars, and that because no one can prove him wrong, his claim is therefore a valid one.`,
    author: "model",
    slug: 'burden-of-proof',
    nameSw: "Mzigo wa Uthibitisho",
    descriptionSw: `Kusema kwamba mzigo wa uthibitisho hauko kwa mtu anayetoa dai, bali kwa mtu mwingine kukanusha.
Mzigo wa uthibitisho uko kwa mtu anayetoa dai, na si kwa mtu mwingine yeyote kukanusha. Kutoweza, au kutopenda, kukanusha dai hakufanyi dai hilo kuwa halali, wala kulipa uaminifu wowote. Hata hivyo ni muhimu kutambua kwamba hatuwezi kamwe kuwa na uhakika wa chochote, na hivyo lazima tupe thamani kwa dai lolote kulingana na ushahidi uliopo, na kukataa kitu kwa msingi kwamba hakijathibitishwa zaidi ya shaka yote pia ni hoja ya upotofu.

Mfano: Bertrand anatangaza kwamba birika la chai, kwa wakati huu hasa, liko katika obiti kuzunguka Jua kati ya Dunia na Mirihi, na kwamba kwa sababu hakuna anayeweza kuthibitisha kuwa amekosea, dai lake kwa hiyo ni halali.`,
  },
  {
    name: "Ambiguity",
    category: "Logical Fallacies",
    description: `Using a double meaning or ambiguity of language to mislead or misrepresent the truth.
Politicians are often guilty of using ambiguity to mislead and will later point to how they were technically not outright lying if they come under scrutiny. The reason that it qualifies as a fallacy is that it is intrinsically misleading.

Example: When the judge asked the defendant why he hadn't paid his parking fines, he said that he shouldn't have to pay them because the sign said 'Fine for parking here' and so he naturally presumed that it would be fine to park there.`,
    author: "model",
    slug: 'ambiguity',
    nameSw: "Utata wa Maana",
    descriptionSw: `Kutumia maana mbili au utata wa lugha kupotosha au kuwakilisha ukweli vibaya.
Wanasiasa mara nyingi wana hatia ya kutumia utata kupotosha na baadaye watataja jinsi walivyokuwa kitaalamu hawakudanganya waziwazi ikiwa watachunguzwa. Sababu ya kustahili kuitwa upotofu ni kwamba unapotosha kiasili.

Mfano: Wakati hakimu alipomuuliza mshtakiwa kwanini hakulipa faini zake za maegesho, alisema kwamba hakupaswa kuzilipa kwa sababu bango lilisema 'Faini kwa kuegesha hapa' (Fine for parking here) na hivyo alidhani kiasili kwamba ilikuwa sawa kuegesha hapo.`,
  },
  {
    name: "The Gambler's Fallacy",
    category: "Logical Fallacies",
    description: `Saying that 'runs' occur to statistically independent phenomena such as roulette wheel spins.
This commonly believed fallacy can be said to have helped create an entire city in the desert of Nevada USA. Though the overall odds of a 'big run' happening may be low, each spin of the wheel is itself entirely independent from the last. So whilst there may be a very small chance that heads will come up 20 times in a row if you flip a coin, the chances of heads coming up on each individual flip remain 50/50, and aren't influenced by what happened before.

Example: Red had come up six times in a row on the roulette wheel, so Greg knew that it was close to certain that black would be next up. Suffering an economic form of natural selection with this thinking, he soon lost all of his savings.`,
    author: "model",
    slug: 'the-gamblers-fallacy',
    nameSw: "Upotofu wa Mcheza Kamari",
    descriptionSw: `Kusema kwamba 'mfuatano' hutokea kwa matukio yaliyojitegemea kitakwimu kama vile mizunguko ya gurudumu la roulette.
Upotofu huu unaoaminika kwa kawaida unaweza kusemekana ulisaidia kuunda jiji zima katika jangwa la Nevada Marekani. Ingawa uwezekano wa jumla wa 'mfuatano mkubwa' kutokea unaweza kuwa mdogo, kila mzunguko wa gurudumu unajitegemea kabisa kutoka ule uliopita. Kwa hiyo ingawa kunaweza kuwa na nafasi ndogo sana kwamba upande wa kichwa utatokea mara 20 mfululizo ukirusha sarafu, nafasi za kichwa kutokea katika kila kurusha binafsi zinabaki 50/50, na haziathiriwi na kilichotokea hapo awali.

Mfano: Rangi nyekundu ilikuwa imetokea mara sita mfululizo kwenye gurudumu la roulette, kwa hiyo Greg alijua kwamba ilikuwa karibu na hakika kwamba nyeusi ingefuata. Akiteseka kwa aina ya kiuchumi ya uteuzi wa asili kwa mawazo haya, hivi karibuni alipoteza akiba yake yote.`,
  },
  {
    name: "Bandwagon",
    category: "Logical Fallacies",
    description: `Appealing to popularity or the fact that many people do something as an attempted form of validation.
The flaw in this argument is that the popularity of an idea has absolutely no bearing on its validity.
If it did, then the Earth would have made itself flat for most of history to accommodate this popular belief.

Example: Shamus pointed a drunken finger at Sean and asked him to explain how so many people could believe in leprechauns if they're only a silly old superstition. Sean, however, had had a few too many Guinness himself and fell off his chair.`,
    author: "model",
    slug: 'bandwagon',
    nameSw: "Kufuata Wengi (Bandwagon)",
    descriptionSw: `Kukata rufaa kwa umaarufu au ukweli kwamba watu wengi hufanya jambo fulani kama jaribio la uthibitisho.
Dosari ya hoja hii ni kwamba umaarufu wa wazo hauna uhusiano wowote na uhalali wake.
Kama ungekuwa, basi Dunia ingejifanya kuwa tambarare kwa sehemu kubwa ya historia ili kuendana na imani hii maarufu.

Mfano: Shamus alimnyooshea Sean kidole akiwa amelewa na kumuuliza aeleze jinsi watu wengi wangeweza kuamini kuhusu viumbe vya Ireland (leprechauns) ikiwa ni ushirikina tu wa kipumbavu. Sean, hata hivyo, alikuwa amekunywa bia ya Guinness nyingi kupita kiasi na akaanguka kutoka kwenye kiti chake.`,
  },
  {
    name: "Appeal to Authority",
    category: "Logical Fallacies",
    description: `Saying that because an authority thinks something, it must therefore be true.
It's important to note that this fallacy should not be used to dismiss the claims of experts, or scientific consensus. Appeals to authority are not valid arguments, but nor is it reasonable to disregard the claims of experts who have a demonstrated depth of knowledge unless one has a similar level of understanding and/or access to empirical evidence. However, it is entirely possible that the opinion of a person or institution of authority is wrong; therefore the authority that such a person or institution holds does not have any intrinsic bearing upon whether their claims are true or not.

Example: Not able to defend his position that evolution 'isn't true' Bob says that he knows a scientist who also questions evolution (and presumably isn't a primate).`,
    author: "model",
    slug: 'appeal-to-authority',
    nameSw: "Kukata Rufaa kwa Mamlaka",
    descriptionSw: `Kusema kwamba kwa sababu mwenye mamlaka anafikiri jambo fulani, basi lazima liwe kweli.
Ni muhimu kutambua kwamba upotofu huu haupaswi kutumiwa kupuuza madai ya wataalamu, au makubaliano ya kisayansi. Rufaa kwa mamlaka si hoja halali, lakini pia si busara kupuuza madai ya wataalamu ambao wana kina kilichoonyeshwa cha maarifa isipokuwa mtu ana kiwango sawa cha uelewa na/au upatikanaji wa ushahidi wa kimaarifa. Hata hivyo, inawezekana kabisa kwamba maoni ya mtu au taasisi yenye mamlaka ni makosa; kwa hiyo mamlaka aliyonayo mtu au taasisi hiyo haina uhusiano wowote wa kiasili na kama madai yao ni ya kweli au la.

Mfano: Akiwa hawezi kutetea msimamo wake kwamba mageuzi 'si kweli', Bob anasema kwamba anamjua mwanasayansi ambaye pia anahoji mageuzi (na labda si nyani).`,
  },
  {
    name: "Composition/Division",
    category: "Logical Fallacies",
    description: `Assuming that one part of something has to be applied to all, or other, parts of it; or that the whole must apply to its parts.
Often when something is true for the part it does also apply to the whole, or vice versa, but the crucial difference is whether there exists good evidence to show that this is the case. Because we observe consistencies in things, our thinking can become biased so that we presume consistency to exist where it does not.

Example: Daniel was a precocious child and had a liking for logic. He reasoned that atoms are invisible, and that he was made of atoms and therefore invisible too. Unfortunately, despite his thinky skills, he lost the game of hide and go seek.`,
    author: "model",
    slug: 'composition-division',
    nameSw: "Kujumlisha / Kugawanya (Composition/Division)",
    descriptionSw: `Kudhani kwamba sehemu moja ya kitu lazima itumike kwa sehemu zote, au nyingine; au kwamba kizima lazima kitumike kwa sehemu zake.
Mara nyingi kitu kinapokuwa kweli kwa sehemu pia kinatumika kwa kizima, au kinyume chake, lakini tofauti muhimu ni kama kuna ushahidi mzuri wa kuonyesha kwamba hii ndiyo hali halisi. Kwa sababu tunaona ulinganifu katika vitu, mawazo yetu yanaweza kuwa na upendeleo kiasi kwamba tunadhani ulinganifu upo mahali ambapo haupo.

Mfano: Daniel alikuwa mtoto mwenye akili ya mapema na alipenda mantiki. Alitoa hoja kwamba atomi hazionekani, na kwamba alikuwa ameundwa kwa atomi na kwa hiyo pia hakuonekana. Kwa bahati mbaya, licha ya ujuzi wake wa kufikiri, alipoteza mchezo wa kujificha.`,
  },
  {
    name: "No True Scotsman",
    category: "Logical Fallacies",
    description: `Making what could be called an appeal to purity as a way to dismiss relevant criticisms or flaws of your argument.
In this form of faulty reasoning one's belief is rendered unfalsifiable because no matter how compelling the evidence is, one simply shifts the goalposts so that it wouldn't apply to a supposedly 'true' example. This kind of post-rationalization is a way of avoiding valid criticisms of one's argument.

Example: Angus declares that Scotsmen do not put sugar on their porridge, to which Lachlan points out that he is a Scotsman and puts sugar on his porridge. Furious, like a true Scot, Angus yells that no true Scotsman sugars his porridge.`,
    author: "model",
    slug: 'no-true-scotsman',
    nameSw: "Hakuna Mskoti wa Kweli",
    descriptionSw: `Kufanya kile kinachoweza kuitwa rufaa kwa usafi kama njia ya kupuuza ukosoaji halali au dosari za hoja yako.
Katika aina hii ya hoja yenye kasoro, imani ya mtu inafanywa kuwa haiwezi kuthibitishwa kuwa ya uongo kwa sababu hata ushahidi ulivyo na nguvu kiasi gani, mtu hubadilisha lengo tu ili lisitumike kwa mfano unaodhaniwa kuwa 'wa kweli'. Aina hii ya kuhalalisha baada ya ukweli ni njia ya kuepuka ukosoaji halali wa hoja ya mtu.

Mfano: Angus anatangaza kwamba Waskoti hawaweki sukari kwenye uji wao, ambapo Lachlan anaonyesha kwamba yeye ni Mskoti na anaweka sukari kwenye uji wake. Akiwa na hasira, kama Mskoti wa kweli, Angus anapiga kelele kwamba hakuna Mskoti wa kweli anayetia sukari kwenye uji wake.`,
  },
  {
    name: "Genetic",
    category: "Logical Fallacies",
    description: `Judging something as either good or bad on the basis of where it comes from, or from whom it came.
This fallacy avoids the argument by shifting focus onto something's or someone's origins. It's similar to an ad hominem fallacy in that it leverages existing negative perceptions to make someone's argument look bad, without actually presenting a case for why the argument itself lacks merit.

Example: Accused on the 6 o'clock news of corruption and taking bribes, the senator said that we should all be very wary of the things we hear in the media, because we all know how very unreliable the media can be.`,
    author: "model",
    slug: 'genetic',
    nameSw: "Upotofu wa Asili (Genetic)",
    descriptionSw: `Kuhukumu kitu kuwa kizuri au kibaya kwa msingi wa kilikotoka, au kimetoka kwa nani.
Upotofu huu unaepuka hoja kwa kuelekeza mawazo kwenye asili ya kitu au mtu. Unafanana na upotofu wa ad hominem kwa kuwa unatumia mitazamo hasi iliyopo kufanya hoja ya mtu ionekane mbaya, bila kuwasilisha kesi ya kwanini hoja yenyewe haina sifa.

Mfano: Akishtakiwa kwenye habari za saa sita kwa ufisadi na kupokea rushwa, seneta alisema kwamba sote tunapaswa kuwa waangalifu sana na mambo tunayosikia kwenye vyombo vya habari, kwa sababu sote tunajua jinsi vyombo vya habari vinavyoweza kuwa visivyoaminika.`,
  },
  {
    name: "Black-or-White",
    category: "Logical Fallacies",
    description: `Presenting two alternative states as the only possibilities, when in fact more possibilities exist.
Also known as the false dilemma, this insidious tactic has the appearance of forming a logical argument, but under closer scrutiny it becomes evident that there are more possibilities than the either/or choice that is presented. Binary, black-or-white thinking doesn't allow for the many different variables, conditions, and contexts in which there would exist more than just the two possibilities put forth. It frames the argument misleadingly and obscures rational, honest debate.

Example: Whilst rallying support for his plan to fundamentally undermine citizens' rights, the Supreme Leader told the people they were either on his side, or they were on the side of the enemy.`,
    author: "model",
    slug: 'black-or-white',
    nameSw: "Nyeusi-au-Nyeupe",
    descriptionSw: `Kuwasilisha hali mbili mbadala kama uwezekano pekee, wakati kwa kweli kuna uwezekano zaidi.
Inayojulikana pia kama mtanziko wa uongo, mbinu hii ya hila inaonekana kuunda hoja ya kimantiki, lakini kwa uchunguzi wa karibu inadhihirika kwamba kuna uwezekano zaidi kuliko uchaguzi wa ama/au uliowasilishwa. Kufikiri kwa njia mbili tu, nyeusi-au-nyeupe, hakuruhusu vigezo, masharti, na muktadha mbalimbali ambapo kungekuwepo zaidi ya uwezekano miwili iliyowasilishwa. Huunda hoja kwa upotoshaji na kuficha mjadala wa kimantiki na wa uaminifu.

Mfano: Akiwa anakusanya msaada wa mpango wake wa kudhoofisha haki za wananchi kimsingi, Kiongozi Mkuu aliwaambia watu kwamba walikuwa ama upande wake, au walikuwa upande wa adui.`,
  },
  {
    name: "Begging the Question",
    category: "Logical Fallacies",
    description: `Presenting a circular argument in which the conclusion was included in the premise.
This logically incoherent argument often arises in situations where people have an assumption that is very ingrained, and therefore taken in their minds as a given. Circular reasoning is bad mostly because it's not very good.

Example: The word of Zorbo the Great is flawless and perfect. We know this because it says so in The Great and Infallible Book of Zorbo's Best and Most Truest Things that are Definitely True and Should Not Ever Be Questioned.`,
    author: "model",
    slug: 'begging-the-question',
    nameSw: "Kukwepa Swali (Begging the Question)",
    descriptionSw: `Kuwasilisha hoja ya mzunguko ambapo hitimisho lilijumuishwa kwenye msingi.
Hoja hii isiyo na mantiki mara nyingi hutokea katika hali ambapo watu wana dhana iliyokita mizizi, na kwa hiyo wanaichukulia kama jambo la hakika akilini mwao. Hoja ya mzunguko ni mbaya hasa kwa sababu si nzuri sana.

Mfano: Neno la Zorbo Mkuu halina dosari na ni kamili. Tunajua hili kwa sababu linasemwa hivyo katika Kitabu Kikuu na Kisicho na Makosa cha Mambo Bora na ya Kweli Zaidi ya Zorbo ambayo ni ya Kweli kabisa na Hayapaswi Kamwe Kuhojiwa.`,
  },
  {
    name: "Appeal to Nature",
    category: "Logical Fallacies",
    description: `Arguing that because something is 'natural' it is therefore valid, justified, inevitable, good or ideal.
Many 'natural' things are also considered 'good', and this can bias our thinking; but naturalness itself doesn't make something good or bad. For instance murder could be seen as very natural, but that doesn't mean it's good or justifiable.

Example: The medicine man rolled into town on his bandwagon offering various natural remedies, such as very special plain water. He said that it was only natural that people should be wary of 'artificial' medicines such as antibiotics.`,
    author: "model",
    slug: 'appeal-to-nature',
    nameSw: "Kukata Rufaa kwa Asili",
    descriptionSw: `Kubishana kwamba kwa sababu kitu ni 'cha asili' kwa hiyo ni halali, kinahesabiwa haki, hakiepukiki, kizuri au bora.
Vitu vingi 'vya asili' pia vinachukuliwa kuwa 'vyema', na hili linaweza kupendelea mawazo yetu; lakini uasilia wenyewe haufanyi kitu kuwa kizuri au kibaya. Kwa mfano mauaji yanaweza kuonekana kuwa ya asili sana, lakini hiyo haimaanishi kuwa ni mazuri au yanahesabiwa haki.

Mfano: Mganga alifika mjini kwa gari lake akitoa tiba mbalimbali za asili, kama vile maji ya kawaida maalum sana. Alisema kwamba ilikuwa ya asili tu kwamba watu wanapaswa kuwa waangalifu na dawa 'za kuunda' kama vile dawa za kuua bakteria (antibiotics).`,
  },
  {
    name: "Anecdotal",
    category: "Logical Fallacies",
    description: `Using a personal experience or an isolated example instead of a sound argument or compelling evidence.
It's often much easier for people to believe someone's testimony as opposed to understanding complex data and variation across a continuum. Quantitative scientific measures are almost always more accurate than personal perceptions and experiences, but our inclination is to believe that which is tangible to us, and/or the word of someone we trust over a more 'abstract' statistical reality.

Example: Jason said that that was all cool and everything, but his grandfather smoked, like, 30 cigarettes a day and lived until 97 - so don't believe everything you read about meta analyses of methodologically sound studies showing proven causal relationships.`,
    author: "model",
    slug: 'anecdotal',
    nameSw: "Ushahidi wa Kisa (Anecdotal)",
    descriptionSw: `Kutumia uzoefu wa kibinafsi au mfano uliotengwa badala ya hoja thabiti au ushahidi wenye nguvu.
Mara nyingi ni rahisi zaidi kwa watu kuamini ushuhuda wa mtu kuliko kuelewa data tata na tofauti katika mfululizo mzima. Vipimo vya kisayansi vya kiasi karibu daima ni sahihi zaidi kuliko mitazamo na uzoefu wa kibinafsi, lakini mwelekeo wetu ni kuamini kile kinachoshikika kwetu, na/au neno la mtu tunayemwamini badala ya ukweli wa kitakwimu ulio 'kidhahania' zaidi.

Mfano: Jason alisema kwamba hayo yote ni mazuri na kila kitu, lakini babu yake alivuta sigara, kama, 30 kwa siku na aliishi hadi 97 - kwa hiyo usiamini kila unachosoma kuhusu meta uchambuzi wa tafiti zenye mbinu nzuri zinazoonyesha uhusiano wa kisababishi uliothibitishwa.`,
  },
  {
    name: "The Texas Sharpshooter",
    category: "Logical Fallacies",
    description: `Cherry-picking a data cluster to suit your argument, or found a pattern to fit a presumption.
This 'false cause' fallacy is coined after a marksman shooting randomly at barns and then painting bullseye targets around the spot where the most bullet holes appear, making it appear as if he's a really good shot. Clusters naturally appear by chance, but don't necessarily indicate that there is a causal relationship.

Example: The makers of Sugarette Candy Drinks point to research showing that of the five countries where Sugarette drinks sell the most units, three of them are in the top ten healthiest countries on Earth, therefore Sugarette drinks are healthy.`,
    author: "model",
    slug: 'the-texas-sharpshooter',
    nameSw: "Mshambuliaji wa Texas",
    descriptionSw: `Kuchagua kimakusudi kundi la data linaloendana na hoja yako, au kupata ruwaza inayolingana na dhana.
Upotofu huu wa 'sababu ya uongo' umetokana na mpiga risasi anayepiga ghalani kiholela na kisha kuchora malengo ya duara kuzunguka sehemu yenye mashimo mengi zaidi ya risasi, akijifanya kana kwamba ni mpiga risasi mzuri sana. Makundi hutokea kiasili kwa bahati, lakini si lazima yaonyeshe kwamba kuna uhusiano wa kisababishi.

Mfano: Watengenezaji wa Vinywaji vya Pipi vya Sugarette wanaelekeza kwenye utafiti unaoonyesha kwamba kati ya nchi tano ambapo vinywaji vya Sugarette vinauzwa zaidi, tatu kati yao ziko katika nchi kumi zenye afya bora Duniani, kwa hiyo vinywaji vya Sugarette vina afya.`,
  },
  {
    name: "Middle Ground",
    category: "Logical Fallacies",
    description: `Climing that a compromise, or middle point, between two extremes must be the truth.
Much of the time the truth does indeed lie between two extreme points, but this can bias our thinking: sometimes a thing is simply untrue and a compromise of it is also untrue. Half way between truth and a lie, is still a lie.

Example: Holly said that vaccinations caused autism in children, but her scientifically well-read friend Caleb said that this claim had been debunked and proven false. Their friend Alice offered a compromise that vaccinations must cause some autism, just not all autism.`,
    author: "model",
    slug: 'middle-ground',
    nameSw: "Nafasi ya Kati",
    descriptionSw: `Kudai kwamba maelewano, au nafasi ya kati, kati ya mambo mawili ya kupita kiasi lazima iwe ukweli.
Mara nyingi ukweli kwa kweli uko kati ya mambo mawili ya kupita kiasi, lakini hili linaweza kupendelea mawazo yetu: wakati mwingine kitu ni cha uongo tu na maelewano yake pia ni ya uongo. Nusu kati ya ukweli na uwongo, bado ni uwongo.

Mfano: Holly alisema kwamba chanjo zilisababisha autism kwa watoto, lakini rafiki yake Caleb msomaji mzuri wa sayansi alisema kwamba dai hili lilikuwa limekanushwa na kuthibitishwa kuwa la uongo. Rafiki yao Alice alitoa maelewano kwamba chanjo lazima zisababishe autism fulani, si autism yote.`,
  },
];
