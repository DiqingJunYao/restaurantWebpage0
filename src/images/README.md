# Photo replacement guide

**favicon.svg** — browser tab icon, linked in the `<head>` of `index.html`. Its olive background, cream “o,” and terracotta dot match the restaurant branding. Replace this SVG to change the website avatar.

These are sample photographs downloaded from Unsplash. Replace the files while keeping the filenames; no HTML changes are required. Images are also labeled with comments in index.html.

1. **hero-table.jpg** — large arched image at the top; use your best food photo. A portrait or near-square crop works best (at least 1200px wide).
2. **restaurant-interior.jpg** — “Our table is your table” story section; use a dining room or restaurant atmosphere photo (at least 1000px wide).
3. **shared-table.jpg** — wide, darkened photo behind “A slower pace. A fuller table.”; use a signature dish or shared meal (at least 1600px wide).

Update each `alt` description in index.html to match your new photo. The dark overlay and image cropping are controlled in src/css/main.scss.

Sample photo URLs:
- https://images.unsplash.com/photo-1547592180-85f173990554
- https://images.unsplash.com/photo-1517248135467-4c7edcad34c4
- https://images.unsplash.com/photo-1555939594-58d7cb561ad1


## Menu thumbnails

Each photo appears on the left of its dish in `menu.html`. Replace these local files with your actual dish photos, keeping their names. A square crop of at least 192 × 192 pixels works well. Update the corresponding `alt` text to describe your replacement image. These are illustrative sample photographs, not photos of dishes prepared by this restaurant.

| File in `src/images/menu/` | Dish | Sample source |
| --- | --- | --- |
| `whipped-feta.jpg` | Whipped feta | [Choosing Chia](https://choosingchia.com/creamy-whipped-feta-dip/) |
| `heirloom-tomatoes.jpg` | Heirloom tomatoes | [Unsplash](https://images.unsplash.com/photo-1546094096-0df4bcaaa337) |
| `lemon-herb-chicken.jpg` | Lemon & herb chicken | [Unsplash](https://images.unsplash.com/photo-1532550907401-a500c9a57435) |
| `garden-pasta.jpg` | Summer garden pasta | [Unsplash](https://images.unsplash.com/photo-1473093295043-cdd812d0e601) |
| `catch-of-the-day.jpg` | Catch of the day | [Unsplash](https://images.unsplash.com/photo-1467003909585-2f8a72700288) |
| `olive-oil-cake.jpg` | Olive oil cake | [Epicurious](https://www.epicurious.com/recipes-menus/almond-flour-recipes) |

Images display at 96 × 96 pixels on desktop and 72 × 72 pixels on smaller screens. Size and spacing are set by `.dish` and `.dish-image` in `src/css/main.scss`.

## Enlarged menu photos

Additional Greek dishes use the same filenames in `src/images/menu/` and `src/images/menu/full/`:

| Filename | Sample photo credit |
| --- | --- |
| `tzatziki.jpg` | [Photo source](https://www.themediterraneandish.com/tzatziki-sauce-recipe/) |
| `spanakopita.jpg` | [Photo source](https://www.themediterraneandish.com/spanakopita-recipe-greek-spinach-pie/) |
| `dolmades.jpg` | [Photo source](https://www.themediterraneandish.com/stuffed-grape-leaves-dolmades/) |
| `moussaka.jpg` | [Photo source](https://www.parapolitika.gr/gefsis/article/1416980/pedanostimi-sudagi-gia-elafru-mousaka/) |
| `chicken-souvlaki.jpg` | [Photo source](https://www.themediterraneandish.com/greek-chicken-souvlaki-recipe-tzatziki/) |
| `baklava.jpg` | [Photo source](https://www.themediterraneandish.com/how-to-make-baklava/) |


Clicking a menu thumbnail opens a larger, uncropped photo in an overlay on the current page. Close it with the × button, Escape, or a click outside the panel. Larger versions are stored in `src/images/menu/full/` using the same filenames as the thumbnails and load only when opened. When replacing a dish photo, update both versions. Use a large version at least 1200 pixels wide for a clear enlargement.
