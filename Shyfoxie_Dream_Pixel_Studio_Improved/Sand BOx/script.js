/* Sunrise artwork is built from palette indices; the renderer only receives real colors. */
const GRID_W = 48, GRID_H = 36;
const FIRST_PALETTE = ['#081C24','#24576A','#5FA6A1','#8E82B5','#D6C16F','#D795A5','#79A57D','#E9E4D2'];
const COLOR_NAMES = {'#081C24':'Deep Night','#101A35':'Deep Night','#24576A':'Midnight Blue','#233B68':'Midnight Blue','#5FA6A1':'Ocean Teal','#3E7F91':'Ocean Blue','#4F4B83':'Indigo','#8174A6':'Lavender','#8E82B5':'Lavender','#C9829A':'Dusty Pink','#D795A5':'Dusty Pink','#D98770':'Coral','#E9A276':'Peach','#E6A34F':'Warm Orange','#D6C16F':'Golden Yellow','#E5C66B':'Golden Yellow','#E8D9A5':'Soft Morning','#F2E9D0':'Cloud Cream','#E9E4D2':'Cloud Cream','#67AFA5':'Seafoam','#C8A77B':'Warm Sand','#79A57D':'Moss Green'};
const palettes = [
 FIRST_PALETTE,
 ['#101A35','#233B68','#4F4B83','#C9829A','#E9A276','#E5C66B','#F2E9D0','#3E7F91','#C8A77B'],
 ['#081C24','#233B68','#8174A6','#D795A5','#E9A276','#E6A34F','#E8D9A5','#5FA6A1','#C8A77B'],
 ['#101A35','#24576A','#4F4B83','#D98770','#E9A276','#E6A34F','#F2E9D0','#3E7F91','#C8A77B'],
 ['#081C24','#233B68','#4F4B83','#8174A6','#C9829A','#E5C66B','#F2E9D0','#3E7F91','#79A57D'],
 ['#101A35','#24576A','#8174A6','#C9829A','#D98770','#E6A34F','#F2E9D0','#5FA6A1','#C8A77B'],
 ['#081C24','#233B68','#4F4B83','#8174A6','#E9A276','#E5C66B','#E8D9A5','#3E7F91','#79A57D'],
 ['#101A35','#24576A','#5FA6A1','#C9829A','#E9A276','#E6A34F','#E8D9A5','#3E7F91','#79A57D'],
 ['#081C24','#233B68','#4F4B83','#C9829A','#D98770','#E5C66B','#F2E9D0','#5FA6A1','#79A57D'],
 ['#101A35','#24576A','#8174A6','#D795A5','#E9A276','#D6C16F','#E9E4D2','#3E7F91','#79A57D'],
 ['#081C24','#233B68','#8174A6','#D98770','#E9A276','#E5C66B','#F2E9D0','#3E7F91','#C8A77B'],
 ['#101A35','#24576A','#4F4B83','#C9829A','#E9A276','#E6A34F','#E8D9A5','#5FA6A1','#C8A77B'],
 ['#081C24','#233B68','#8174A6','#D795A5','#E9A276','#E5C66B','#F2E9D0','#3E7F91','#C8A77B'],
 ['#101A35','#24576A','#5FA6A1','#8174A6','#D795A5','#E9A276','#E8D9A5','#67AFA5','#C8A77B'],
 ['#081C24','#233B68','#4F4B83','#C9829A','#D98770','#E6A34F','#F2E9D0','#3E7F91','#C8A77B'],
 ['#101A35','#24576A','#8174A6','#D795A5','#E9A276','#D6C16F','#E9E4D2','#5FA6A1','#79A57D'],
 ['#081C24','#233B68','#4F4B83','#D98770','#E9A276','#E6A34F','#E8D9A5','#3E7F91','#C8A77B'],
 ['#101A35','#24576A','#8174A6','#C9829A','#E9A276','#E5C66B','#F2E9D0','#5FA6A1','#79A57D'],
 ['#081C24','#233B68','#4F4B83','#D795A5','#E9A276','#E5C66B','#F2E9D0','#67AFA5','#79A57D'],
 ['#081C24','#24576A','#4F4B83','#D795A5','#E9A276','#D6C16F','#E9E4D2','#67AFA5','#C8A77B'],
 ['#101A35','#233B68','#8174A6','#D98770','#E9A276','#E6A34F','#F2E9D0','#3E7F91','#79A57D']
];
const artworkSpecs = [
 ['beach-sunrise','Beach Sunrise','Quiet waves roll toward a warm, open shore.','beach'],['tropical-sunrise','Tropical Sunrise','Palm fronds frame the first light above the sea.','tropical'],['pink-beach-sunrise','Pink Beach Sunrise','A blush horizon settles softly over lavender water.','pink-beach'],['orange-ocean-sunrise','Orange Ocean Sunrise','A bright reflection stretches across the waking ocean.','orange-ocean'],['purple-morning','Purple Morning','Purple clouds give way to a patient ribbon of gold.','purple'],['cloudy-sunrise','Cloudy Sunrise','Large quiet clouds catch the earliest light.','clouds'],['mountain-sunrise','Mountain Sunrise','A glowing horizon appears behind layered mountains.','mountains'],['lake-sunrise','Lake Sunrise','The still lake holds the morning almost perfectly.','lake'],['forest-sunrise','Forest Sunrise','Thin beams of gold find their way between tall trees.','forest'],['cabin-sunrise','Cabin Sunrise','A little cabin wakes with smoke above the pines.','cabin'],['lighthouse-sunrise','Lighthouse Sunrise','A patient lighthouse stands beside the brightening sea.','lighthouse'],['rocky-coast-sunrise','Rocky Coast Sunrise','Dark rocks listen to the small waves below.','rocks'],['seagull-sunrise','Sunrise With Seagulls','Tiny birds cross the calm space between sea and sky.','seagulls'],['foggy-sunrise','Foggy Sunrise','Mist keeps the sun gentle above quiet water.','fog'],['palm-sunrise','Sunrise Through Palm Trees','Tall palms hold the horizon like a window.','palms'],['wildflower-sunrise','Wildflower Sunrise','Small flowers turn their faces toward the dawn.','flowers'],['desert-sunrise','Desert Sunrise','Long dunes gather the amber light in soft layers.','desert'],['valley-sunrise','Sunrise Valley','A broad valley opens toward a brilliant horizon.','valley'],['rainy-sunrise','Rainy Sunrise','Sunlight breaks through rain above wet sand.','rain'],['dreamy-sunrise','Dreamy Sunrise','Fading stars and glowing water make a soft fantasy dawn.','dreamy']
];

function paintGrid(spec) {
  const pixels = Array(GRID_W * GRID_H).fill(0), stages = Array(GRID_W * GRID_H).fill(1), put = (x,y,c,s=2) => { if(x>=0&&x<GRID_W&&y>=0&&y<GRID_H){pixels[y*GRID_W+x]=c;stages[y*GRID_W+x]=s;} };
  const rect = (x,y,w,h,c,s=2) => { for(let yy=y;yy<y+h;yy++) for(let xx=x;xx<x+w;xx++) put(xx,yy,c,s); };
  const line = (x1,y1,x2,y2,c,s=3) => { const n=Math.max(Math.abs(x2-x1),Math.abs(y2-y1)); for(let i=0;i<=n;i++) put(Math.round(x1+(x2-x1)*i/n),Math.round(y1+(y2-y1)*i/n),c,s); };
  const sun = (cx,cy) => { [2,4,6,6,4,2].forEach((w,row)=>{for(let x=cx-Math.floor(w/2);x<cx-Math.floor(w/2)+w;x++)put(x,cy-2+row,row<2||row>3?5:6,10+Math.floor(row/2));}); };
  const ground = Math.min(8, spec.palette.length - 1), waterColor = Math.min(7, spec.palette.length - 1);
  const water = (c=waterColor,land=ground) => { rect(0,24,48,7,c,7);rect(0,31,48,5,land,8); };
  const reflection = (cx) => { for(let y=25;y<32;y++)rect(cx-Math.max(1,4-Math.floor((y-25)/2)),y,Math.min(9,2+Math.floor((y-25)/2)*2),1,5,11); };
  const waves = () => { for(let y=26;y<31;y+=2)for(let x=3+(y%4);x<46;x+=9){put(x,y,6,12);put(x+1,y,6,12);} };
  const cloud = (x,y,w,c=6) => { rect(x,y+1,w,3,c,8);rect(x+3,y,w-6,5,c,8); };
  const mountain = (peak,base,c,s=8) => { for(let x=0;x<48;x++){const top=Math.round(base-Math.abs(x-peak)*.65);for(let y=Math.max(12,top);y<base;y++)put(x,y,c,s);} };
  const palm = (x) => { line(x,33,x-2,13,0,9); line(x-2,13,x-10,9,0,10);line(x-2,13,x+6,8,0,10);line(x-2,13,x-7,16,0,10);line(x-2,13,x+3,16,0,10); };
  /* Horizontal bands reveal the sunrise in order: night, blue, violet, pink, coral, gold. */
  rect(0,0,48,5,0,1);rect(0,5,48,4,1,2);rect(0,9,48,4,2,3);rect(0,13,48,4,3,4);rect(0,17,48,4,4,5);rect(0,21,48,3,5,6);
  switch(spec.scene){
    case 'beach':water();sun(27,20);reflection(27);waves();break;
    case 'tropical':water();sun(25,19);palm(7);palm(43);cloud(15,8,9);waves();break;
    case 'pink-beach':water();sun(22,19);reflection(22);waves();break;
    case 'orange-ocean':water();sun(29,20);reflection(29);reflection(29);waves();break;
    case 'purple':water();sun(25,19);mountain(12,29,0);mountain(37,28,1);break;
    case 'clouds':water();sun(25,20);cloud(5,9,14);cloud(29,12,15);cloud(17,17,13,5);reflection(25);waves();break;
    case 'mountains':water();sun(26,18);mountain(13,30,1);mountain(34,29,0);line(0,31,48,31,7,10);break;
    case 'lake':water();sun(24,18);rect(19,25,11,1,6,11);rect(17,27,15,1,5,11);rect(14,29,21,1,4,11);break;
    case 'forest':water();sun(25,17);[3,10,39,46].forEach(x=>{rect(x,14,3,18,0,9);line(x+1,14,x-5,19,8,10);line(x+1,16,x+6,21,8,10);});break;
    case 'cabin':water();sun(32,18);mountain(9,28,1);rect(16,24,14,9,ground,10);line(14,24,23,17,0,10);line(23,17,32,24,0,10);rect(21,28,4,5,0,12);rect(26,26,3,3,6,12);line(27,21,27,16,0,11);cloud(26,13,5);break;
    case 'lighthouse':water();sun(29,18);rect(22,14,5,18,6,10);rect(20,12,9,3,0,10);rect(21,9,7,3,0,10);waves();break;
    case 'rocks':water();sun(28,19);[[2,27,8],[10,30,7],[37,28,10],[29,32,8]].forEach(a=>{rect(a[0],a[1],a[2],5,0,10);line(a[0],a[1],a[0]+Math.floor(a[2]/2),a[1]-4,0,10);});waves();reflection(28);break;
    case 'seagulls':water();sun(25,19);waves();[12,17,34].forEach(x=>{line(x,14,x+2,12,0,13);line(x+2,12,x+4,14,0,13);});reflection(25);break;
    case 'fog':water();sun(24,19);cloud(3,23,18);cloud(29,25,16);rect(0,29,48,1,6,12);rect(0,32,48,1,6,12);break;
    case 'palms':water();sun(24,18);palm(4);palm(44);reflection(24);waves();break;
    case 'flowers':water();sun(25,19);mountain(37,27,1);[4,10,16,34,41,46].forEach(x=>{line(x,35,x+1,29,ground,12);put(x-1,29,3,13);put(x+2,30,3,13);});break;
    case 'desert':rect(0,27,48,9,ground,8);line(0,29,17,23,ground,8);line(17,23,33,29,ground,8);line(33,29,48,25,ground,8);sun(27,18);line(0,32,22,27,5,11);line(22,27,48,32,5,11);break;
    case 'valley':water();sun(25,18);mountain(5,29,0);mountain(43,29,1);line(14,35,24,25,ground,10);line(34,35,26,25,ground,10);break;
    case 'rain':water();sun(28,20);for(let x=5;x<46;x+=7)line(x,10+(x%5),x-2,20+(x%5),6,12);waves();reflection(28);break;
    case 'dreamy':water();sun(24,18);reflection(24);cloud(5,10,12);cloud(32,13,11);waves();[[5,4],[12,7],[18,3],[33,6],[43,4]].forEach(p=>put(p[0],p[1],6,13));break;
  }
  const revealOrder = Array.from({ length: pixels.length }, (_, index) => index);
  return {...spec,width:GRID_W,height:GRID_H,pixels,stages,revealOrder};
}
function createPalette(colors) { return colors.map((color, index) => ({ number: index + 1, name: COLOR_NAMES[color] || `Color ${index + 1}`, color })); }
function shuffle(array) { for (let index = array.length - 1; index > 0; index--) { const randomIndex = Math.floor(Math.random() * (index + 1)); [array[index], array[randomIndex]] = [array[randomIndex], array[index]]; } return array; }
function createRevealOrder(artwork, mode = 'random') {
  const revealOrder = Array.from({ length: artwork.pixels.length }, (_, index) => index);
  if (mode === 'flow') return revealOrder.sort((a, b) => artwork.stages[a] - artwork.stages[b] || a - b);
  shuffle(revealOrder);
  const balancedOrder = [], remaining = revealOrder.slice(); let previousColor = null;
  while (remaining.length) {
    const window = remaining.slice(0, Math.min(14, remaining.length));
    const different = window.filter(index => artwork.pixels[index] !== previousColor);
    const choices = different.length && Math.random() > 0.18 ? different : window;
    const selected = choices[Math.floor(Math.random() * choices.length)];
    balancedOrder.push(selected); remaining.splice(remaining.indexOf(selected), 1); previousColor = artwork.pixels[selected];
  }
  return balancedOrder;
}
const artworks = artworkSpecs.map((spec,index)=>paintGrid({id:spec[0],name:spec[1],description:spec[2],scene:spec[3],palette:palettes[index]})).map(artwork => ({ ...artwork, palette: createPalette(artwork.palette) }));
function validateArtwork(artwork){ if(!Array.isArray(artwork.palette)||!artwork.palette.length)console.error('Artwork has no palette:',artwork.id); artwork.pixels.forEach((colorIndex,index)=>{if(!Number.isInteger(colorIndex)||colorIndex<0||colorIndex>=artwork.palette.length)console.error(`Invalid color at pixel ${index}:`,colorIndex); if(artwork.palette[colorIndex] === undefined)console.error(`Undefined color at pixel ${index}:`,colorIndex);}); }
artworks.forEach(validateArtwork);
artworks.forEach(artwork => { artwork.revealOrder = createRevealOrder(artwork); });

/* Fixed, hand-authored 96x64 room composition for the cozy sleeping cat. */
function createCozySleepingCat() {
  const palette = [
    { number: 1, name: 'Midnight Black', color: '#17191C', hex: '#17191C' }, { number: 2, name: 'Soft Black', color: '#292B2F', hex: '#292B2F' }, { number: 3, name: 'Charcoal', color: '#41444A', hex: '#41444A' },
    { number: 4, name: 'Dark Gray', color: '#5C6066', hex: '#5C6066' }, { number: 5, name: 'Medium Gray', color: '#777B80', hex: '#777B80' }, { number: 6, name: 'Light Gray', color: '#A9ADB0', hex: '#A9ADB0' },
    { number: 7, name: 'Warm Gray', color: '#C7C3BA', hex: '#C7C3BA' }, { number: 8, name: 'Cream', color: '#E8E1D3', hex: '#E8E1D3' }, { number: 9, name: 'Soft White', color: '#F5F3ED', hex: '#F5F3ED' },
    { number: 10, name: 'Pure White', color: '#FFFFFF', hex: '#FFFFFF' }, { number: 11, name: 'Soft Pink', color: '#D99A9D', hex: '#D99A9D' }, { number: 12, name: 'Nose Pink', color: '#B96E78', hex: '#B96E78' },
    { number: 13, name: 'Deep Teal', color: '#164E63', hex: '#164E63' }, { number: 14, name: 'Teal', color: '#287C82', hex: '#287C82' }, { number: 15, name: 'Dusty Blue', color: '#5C91A3', hex: '#5C91A3' },
    { number: 16, name: 'Soft Blue', color: '#82B5C4', hex: '#82B5C4' }, { number: 17, name: 'Navy', color: '#23364D', hex: '#23364D' }, { number: 18, name: 'Sage', color: '#78966F', hex: '#78966F' },
    { number: 19, name: 'Dark Green', color: '#45644A', hex: '#45644A' }, { number: 20, name: 'Muted Gold', color: '#D6A84F', hex: '#D6A84F' }, { number: 21, name: 'Soft Coral', color: '#C96F62', hex: '#C96F62' },
    { number: 22, name: 'Dark Wood', color: '#5A3425', hex: '#5A3425' }, { number: 23, name: 'Medium Wood', color: '#805238', hex: '#805238' }, { number: 24, name: 'Warm Wood', color: '#A96D45', hex: '#A96D45' },
    { number: 25, name: 'Light Wood', color: '#C38A5A', hex: '#C38A5A' }, { number: 26, name: 'Night Blue', color: '#162A46', hex: '#162A46' }, { number: 27, name: 'Deep Blue', color: '#244B68', hex: '#244B68' },
    { number: 28, name: 'Muted Sky', color: '#4F7891', hex: '#4F7891' }, { number: 29, name: 'Soft Moonlight', color: '#C8D9D8', hex: '#C8D9D8' }, { number: 30, name: 'Dark Teal', color: '#164B52', hex: '#164B52' },
    { number: 31, name: 'Forest Teal', color: '#286267', hex: '#286267' }, { number: 32, name: 'Muted Green', color: '#477B70', hex: '#477B70' }, { number: 33, name: 'Light Teal', color: '#7BA49A', hex: '#7BA49A' },
    { number: 34, name: 'Leaf Green', color: '#3E7A4A', hex: '#3E7A4A' }, { number: 35, name: 'Bright Green', color: '#67A64E', hex: '#67A64E' }, { number: 36, name: 'Dark Leaf', color: '#285634', hex: '#285634' },
    { number: 37, name: 'Plant Highlight', color: '#91BD68', hex: '#91BD68' }, { number: 38, name: 'Terracotta', color: '#A75B3F', hex: '#A75B3F' }, { number: 39, name: 'Dark Terracotta', color: '#733B2E', hex: '#733B2E' },
    { number: 40, name: 'Light Terracotta', color: '#C87957', hex: '#C87957' }
  ];
  const width = 96, height = 64, pixels = Array(width * height).fill(17), stages = Array(width * height).fill(1);
  const put = (x, y, color, stage = 2) => { if (x >= 0 && x < width && y >= 0 && y < height) { pixels[y * width + x] = color; stages[y * width + x] = stage; } };
  const rect = (x, y, w, h, color, stage = 2) => { for (let yy = y; yy < y + h; yy++) for (let xx = x; xx < x + w; xx++) put(xx, yy, color, stage); };
  const line = (x1, y1, x2, y2, color, stage = 3) => { const count = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)); for (let i = 0; i <= count; i++) put(Math.round(x1 + (x2 - x1) * i / count), Math.round(y1 + (y2 - y1) * i / count), color, stage); };
  rect(0, 0, width, 64, 17, 1); rect(4, 4, 88, 29, 16, 2); rect(6, 6, 84, 25, 15, 3);
  rect(8, 8, 38, 19, 22, 3); rect(10, 10, 34, 15, 23, 4); for (let x = 12; x < 43; x += 6) rect(x, 10, 1, 15, 24, 5); rect(47, 7, 29, 18, 30, 3); rect(50, 9, 23, 14, 26, 4); rect(52, 11, 9, 5, 27, 5); rect(63, 11, 9, 5, 28, 5); line(62, 9, 62, 23, 29, 5); line(49, 8, 47, 26, 31, 4); line(74, 8, 76, 27, 31, 4);
  rect(4, 27, 88, 6, 23, 5); rect(0, 33, 96, 12, 13, 6); for (let x = 0; x < 96; x += 8) { rect(x, 34, 4, 2, 14, 7); rect(x + 3, 39, 4, 2, 15, 7); } rect(0, 45, 96, 19, 13, 7); for (let x = 4; x < 96; x += 12) { rect(x, 48, 4, 2, 20, 8); rect(x + 5, 53, 4, 2, 21, 8); rect(x + 2, 58, 5, 2, 14, 8); }
  rect(77, 31, 14, 3, 24, 8); rect(79, 34, 10, 17, 23, 9); rect(80, 39, 8, 2, 25, 10); rect(82, 46, 4, 2, 22, 10); rect(78, 51, 12, 3, 22, 8); rect(80, 54, 9, 2, 24, 8);
  rect(80, 24, 2, 9, 36, 9); line(81, 25, 75, 19, 34, 10); line(81, 26, 87, 18, 35, 10); line(81, 27, 77, 14, 36, 10); line(81, 26, 88, 13, 34, 10); line(81, 24, 82, 11, 37, 11); rect(78, 30, 7, 4, 38, 9);
  /* The cat is a broad curled silhouette, with a white muzzle, chest, paws, and face markings. */
  rect(20, 28, 48, 21, 1, 9); rect(26, 24, 25, 17, 2, 10); rect(31, 21, 17, 8, 1, 11); rect(29, 20, 7, 8, 1, 11); rect(44, 20, 7, 8, 1, 11); rect(34, 27, 22, 11, 3, 11); rect(26, 34, 35, 12, 4, 11); rect(21, 40, 43, 9, 2, 10); line(20, 42, 13, 48, 1, 12); line(13, 48, 20, 54, 1, 12); line(20, 54, 34, 55, 2, 12); rect(35, 39, 18, 9, 9, 12); rect(40, 35, 11, 10, 8, 13); rect(44, 31, 8, 7, 9, 13); rect(30, 42, 8, 8, 9, 13); rect(49, 43, 9, 6, 9, 13); rect(29, 30, 5, 4, 9, 13); put(37, 29, 10, 14); put(48, 29, 10, 14); put(42, 36, 12, 14); put(43, 34, 12, 14); line(34, 31, 29, 30, 7, 14); line(50, 31, 55, 30, 7, 14); put(42, 38, 12, 15); put(43, 38, 12, 15); put(41, 33, 1, 14); put(50, 33, 1, 14); line(35, 30, 29, 28, 1, 13); line(50, 30, 55, 28, 1, 13);
  line(35, 37, 27, 36, 6, 15); line(51, 37, 59, 36, 6, 15); put(43, 35, 12, 15); line(40, 36, 38, 39, 11, 15); line(47, 36, 49, 39, 11, 15); line(43, 40, 45, 40, 12, 15); line(34, 44, 25, 45, 10, 15); line(52, 44, 61, 45, 10, 15);
  const revealOrder = Array.from({ length: pixels.length }, (_, index) => index); shuffle(revealOrder);
  return { id: 'cozy-sleeping-cat', name: 'Cozy Sleeping Cat', type: 'diamond', width, height, description: 'A peaceful black-and-white cat sleeping curled up on a cozy bed in a warm bedroom.', palette, pixels, stages, revealOrder };
}
const cozySleepingCat = createCozySleepingCat();
artworks.push(cozySleepingCat);
validateArtwork(cozySleepingCat);

/* Detailed collection: these maps are composed from intentional scene layers, never random colors. */
const detailedSceneSpecs = [
  ['enchanted-wildflower-garden','Enchanted Wildflower Garden','Layered flowers and fireflies beneath an old garden arch.','flowers'],['rose-garden','Rose Garden','A deep rose garden with climbing blooms and stone paths.','roses'],['sunflower-field','Sunflower Field','Tall sunflowers turn toward a late golden sky.','sunflowers'],['lavender-field','Lavender Field','Rows of lavender lead toward distant blue hills.','lavender'],['cherry-blossom-garden','Cherry Blossom Garden','Pink blossoms drift beside a quiet garden pond.','cherry'],['wildflower-meadow','Wildflower Meadow','A broad meadow gathers tiny flowers and tall grasses.','meadow'],['cottage-garden','Cottage Garden','A little cottage rests among layered flowers and herbs.','cottage-garden'],['moonlit-flower-garden','Moonlit Flower Garden','Silver flowers open beneath a calm crescent moon.','moon-flowers'],['floral-window','Floral Window','A bright window looks out through a frame of flowers.','floral-window'],['flower-bouquet','Flower Bouquet','A gathered bouquet sits in a hand-painted vase.','bouquet'],['butterfly-garden','Butterfly Garden','Butterflies pass between overlapping beds of color.','butterflies'],['botanical-garden','Botanical Garden','Fern shadows and broad leaves fill a glasshouse.','botanical'],['spring-garden','Spring Garden','Fresh leaves, stepping stones, and a small bench at dawn.','spring'],['flowers-and-fountain','Flowers Around a Fountain','A quiet fountain anchors a circular flower bed.','fountain'],['cat-by-window','Cat Sitting by a Window','A watchful cat sits in a sunlit window nook.','cat-window'],['fox-wildflower-meadow','Fox in a Wildflower Meadow','A fox rests among flowers with a distant ridge behind it.','fox-meadow'],['owl-flowering-branch','Owl on a Flowering Branch','An owl watches the garden from a blossom-covered branch.','owl-branch'],['rabbit-flower-garden','Rabbit in a Flower Garden','A small rabbit pauses between tulips and leaves.','rabbit-garden'],['deer-lake-dawn','Deer beside a Lake','A deer stands at the edge of a reflective dawn lake.','deer-lake'],['hummingbird-garden','Hummingbird Garden','A hummingbird hovers beside tall trumpet flowers.','hummingbird'],['cozy-reading-room','Cozy Reading Room','Books, a lamp, plants, and a deep armchair in lamplight.','reading-room'],['rainy-bedroom','Rainy Bedroom Window','A warm bedroom glows while rain traces the window.','rainy-room'],['craft-room','Craft Room','Thread, paper, jars, and a small worktable under a window.','craft-room'],['fireplace-cabin','Fireplace Cabin','A firelit cabin interior opens toward snowy pines.','fireplace'],['tea-and-books','Tea and Books','A tea table rests beside a stack of well-loved books.','tea-books'],['enchanted-castle','Enchanted Castle','A distant castle rises behind a bridge and glowing garden.','castle'],['fairy-garden','Fairy Garden','Tiny lanterns illuminate a mossy garden at dusk.','fairy-garden'],['crystal-cave','Crystal Cave','Layered crystals glow around a sheltered underground pool.','crystal-cave'],['wizard-tower','Wizard Tower','A tall tower, moon, books, and a quiet constellation.','wizard-tower'],['floating-island','Floating Island','A small island drifts above clouds and distant mountains.','floating-island']
];
const detailedPalette = [
  {number:1,name:'Midnight',color:'#11182A',hex:'#11182A'},{number:2,name:'Ink',color:'#1D2638',hex:'#1D2638'},{number:3,name:'Slate',color:'#364557',hex:'#364557'},{number:4,name:'Mist Blue',color:'#66879A',hex:'#66879A'},{number:5,name:'Cloud',color:'#D8D9CF',hex:'#D8D9CF'},
  {number:6,name:'Cream',color:'#F0E5C9',hex:'#F0E5C9'},{number:7,name:'Gold',color:'#D7B35F',hex:'#D7B35F'},{number:8,name:'Coral',color:'#C87972',hex:'#C87972'},{number:9,name:'Rose',color:'#D99BA6',hex:'#D99BA6'},{number:10,name:'Lilac',color:'#9B8BB7',hex:'#9B8BB7'},
  {number:11,name:'Teal',color:'#3E8885',hex:'#3E8885'},{number:12,name:'Seafoam',color:'#74B5A6',hex:'#74B5A6'},{number:13,name:'Moss',color:'#718C64',hex:'#718C64'},{number:14,name:'Leaf',color:'#3F6948',hex:'#3F6948'},{number:15,name:'Pine',color:'#27463B',hex:'#27463B'},
  {number:16,name:'Plum',color:'#633F65',hex:'#633F65'},{number:17,name:'Rust',color:'#A65748',hex:'#A65748'},{number:18,name:'Terracotta',color:'#B86E50',hex:'#B86E50'},{number:19,name:'Warm Wood',color:'#83543D',hex:'#83543D'},{number:20,name:'Snow',color:'#F4F2EA',hex:'#F4F2EA'},
  {number:21,name:'Sunlit Yellow',color:'#E4C66C',hex:'#E4C66C'},{number:22,name:'Sky',color:'#83B7C4',hex:'#83B7C4'},{number:23,name:'Water',color:'#356E83',hex:'#356E83'},{number:24,name:'Berry',color:'#9C536B',hex:'#9C536B'},{number:25,name:'Violet',color:'#735B9B',hex:'#735B9B'},
  {number:26,name:'Fern',color:'#91AD72',hex:'#91AD72'},{number:27,name:'Pearl',color:'#C9D5D0',hex:'#C9D5D0'},{number:28,name:'Ember',color:'#D86F4A',hex:'#D86F4A'},{number:29,name:'Deep Green',color:'#203A32',hex:'#203A32'},{number:30,name:'Moon',color:'#C8D8D2',hex:'#C8D8D2'}
];
const ANIMAL_TEMPLATES = {
  cat: { width: 42, height: 30, mask: ['...........###........###...........','..........#####......#####..........','..........######....######..........','.........##################.........','........####################........','........####..########..####........','........####################........','.........##################.........','..........################..........','............############............','..............########..............','...........##############...........','........####################........','......########################......','....############################....','...##############################...','..################################..','..#######..################..#######','..######....############....######..','...#####....############....#####...','....############################....','.....##########################.....','........####################........','.........##################.........','...........##############...........','.............##########.............','...............######...............','...............######...............','..............########..............','.............##########.............'], colors: { body: 2, shadow: 3, white: 5, highlight: 6, eye: 1, nose: 23 } },
  fox: { width: 42, height: 34, mask: ['...........##........##...........','..........####......####..........','.........######....######.........','........##################........','.......####################.......','......######################......','......######..########..######....','......########################....','.......######################.....','........####################......','.........##################.......','.........#######..#######.........','........##################........','......########################....','....############################..','...##############################.','..################################','..##########..########..########..','..########....######....########..','...############################....','....##########################.....','.....########################.....','......######################.......','.......####################........','........##################.........','.........##############............','..........############.............','..........############.............','.........##############............','........################............','......##################............','....######################..........','..############################......','##############################......'], colors: { body: 17, shadow: 1, muzzle: 6, chest: 5, highlight: 21, eye: 1, nose: 17, tip: 6 } },
  rabbit: { width: 34, height: 40, mask: ['........###....###........','.......#####..#####.......','.......#####..#####.......','.......############.......','.......############.......','........##########........','........##########........','.......############.......','......##############......','.....################.....','.....################.....','......##############......','.......############.......','........##########........','........##########........','.......############.......','......##############......','.....################.....','....##################....','...####################...','...####################...','....##################....','.....################.....','.....################.....','....##################....','...####################...','...###..########..###....','...##....######....##....','....################....','.....##############.....','......############......','.......##########.......','.......##########.......','......############......','....################....','...##################...','..####################..','..########....########..','...######....######.....','....################....'], colors: { body: 5, shadow: 3, white: 6, highlight: 20, eye: 1, nose: 8, ear: 9 } },
  deer: { width: 36, height: 44, mask: ['........####....####........','.......######..######.......','........############........','.........##########.........','.........##########.........','........############........','.......##############.......','......################......','......####..######..####....','......################......','.......##############.......','........############........','........############........','.........##########.........','.........##########.........','........############........','.......##############.......','......################......','.....##################.....','....####################....','....####################....','.....##################.....','......################......','.......##############.......','........############........','.........##########.........','.........##########.........','.........##########.........','........##########..........','.......############.........','.......############.........','.......############.........','......##############........','.....################.......','....##################......','...####################.....','...#####............#####....','..####................####..','..####................####..','..####................####..','..####................####..','..####................####..','..####................####..','..####................####..'], colors: { body: 13, shadow: 14, muzzle: 6, highlight: 26, eye: 1, nose: 17, antler: 7 } },
  owl: { width: 38, height: 38, mask: ['...........######...........','.........##########.........','........############........','.......##############.......','......################......','.....######......######.....','....######..####..######....','....######..####..######....','.....##################.....','......######..######.......','......################......','.....##################.....','....####################....','....####################....','...######################...','...######################...','...##########..##########...','...##########..##########...','....####################....','.....##################.....','......################......','......################......','.....##################.....','....####################....','...######################...','..########################..','..######..########..######..','..#####....######....#####..','...######################...','....####################....','.....##################.....','......################......','.......##############.......','........############........','...........########...........','..........########..........','.........##########.........','........############........'], colors: { body: 15, shadow: 1, face: 5, eye: 20, pupil: 1, beak: 7, wing: 13, highlight: 27 } },
  hummingbird: { width: 44, height: 28, mask: ['....................##....................','...................####...................','...............##########.................','..............############................','............##################............','..........######################..........','........##########################........','......##############################......','....##############....##############......','..##############........##############....','..############................############','....########..................########....','......######....########....######........','........######..########..######..........','..........####################............','............################..............','..............############................','...............########...................','.................######...................','..................####....................','...................##.....................','..........................................','..........................................','..........................................','..........................................','..........................................','..........................................','..........................................'], colors: { body: 23, shadow: 15, wing: 10, breast: 6, highlight: 21, beak: 7 } }
};
function animalTypeForScene(scene) { if (scene.includes('cat')) return 'cat'; if (scene.includes('fox')) return 'fox'; if (scene.includes('rabbit')) return 'rabbit'; if (scene.includes('deer')) return 'deer'; if (scene.includes('owl')) return 'owl'; if (scene.includes('hummingbird')) return 'hummingbird'; return null; }
function normalizeAnimalTemplate(template) { return { ...template, renderScale: template.renderScale || (template.width === 44 ? 2 : ANIMAL_RENDER_SCALE), mask: Array.from({ length: template.height }, (_, row) => { const raw = (template.mask[row] || '').slice(0, template.width); const left = Math.floor((template.width - raw.length) / 2); return '.'.repeat(left) + raw + '.'.repeat(template.width - left - raw.length); }) }; }
const ANIMAL_RENDER_SCALE = 1.5;

function createDetailedArtwork(spec,index){
  /*
   * Detailed pixel-art scene generator.
   * The logical artwork is 128x72 so it remains crisp for diamond-cell rendering,
   * but each scene is composed in layers: sky, distant forms, midground,
   * focal subject, foreground texture and small highlight details.
   */
  const width=128,height=72;
  const pixels=Array(width*height).fill(1);
  const stages=Array(width*height).fill(1);
  const locked=new Set();

  const put=(x,y,c,s=2)=>{
    x=Math.round(x); y=Math.round(y);
    if(x>=0&&x<width&&y>=0&&y<height&&!locked.has(y*width+x)){
      pixels[y*width+x]=c; stages[y*width+x]=s;
    }
  };
  const lockPut=(x,y,c,s=10)=>{
    x=Math.round(x); y=Math.round(y);
    if(x>=0&&x<width&&y>=0&&y<height){
      const i=y*width+x; pixels[i]=c; stages[i]=s; locked.add(i);
    }
  };
  const rect=(x,y,w,h,c,s=2)=>{
    for(let yy=Math.floor(y);yy<Math.ceil(y+h);yy++)
      for(let xx=Math.floor(x);xx<Math.ceil(x+w);xx++) put(xx,yy,c,s);
  };
  const line=(x1,y1,x2,y2,c,s=3)=>{
    const n=Math.max(Math.abs(x2-x1),Math.abs(y2-y1),1);
    for(let i=0;i<=n;i++) put(
      x1+(x2-x1)*i/n,y1+(y2-y1)*i/n,c,s
    );
  };
  const ellipse=(cx,cy,rx,ry,c,s=4)=>{
    for(let y=Math.floor(cy-ry);y<=Math.ceil(cy+ry);y++)
      for(let x=Math.floor(cx-rx);x<=Math.ceil(cx+rx);x++){
        const dx=(x-cx)/rx,dy=(y-cy)/ry;
        if(dx*dx+dy*dy<=1) put(x,y,c,s);
      }
  };
  const lockEllipse=(cx,cy,rx,ry,c,s=10)=>{
    for(let y=Math.floor(cy-ry);y<=Math.ceil(cy+ry);y++)
      for(let x=Math.floor(cx-rx);x<=Math.ceil(cx+rx);x++){
        const dx=(x-cx)/rx,dy=(y-cy)/ry;
        if(dx*dx+dy*dy<=1) lockPut(x,y,c,s);
      }
  };

  // A tiny deterministic variation keeps repeated scene types from looking identical.
  let seed=(index+1)*1009;
  const rnd=()=>{ seed=(seed*1664525+1013904223)>>>0; return seed/4294967296; };
  const pick=(arr)=>arr[Math.floor(rnd()*arr.length)];

  const scene=spec[3];

  // ---- SKY / ATMOSPHERE ---------------------------------------------------
  const skyByScene={
    flowers:[25,4],roses:[25,4],sunflowers:[22,6],lavender:[22,6],cherry:[22,6],
    meadow:[22,6],'cottage-garden':[22,6],'moon-flowers':[1,25],'floral-window':[22,6],
    bouquet:[22,6],butterflies:[22,6],botanical:[22,6],spring:[22,6],fountain:[22,6],
    'cat-window':[22,6],'fox-meadow':[22,6],'owl-branch':[1,25],'rabbit-garden':[22,6],
    'deer-lake':[22,6],hummingbird:[22,6],'reading-room':[2,3],'rainy-room':[2,22],
    'craft-room':[22,6],fireplace:[2,3],'tea-books':[2,3],castle:[1,25],
    'fairy-garden':[1,25],'crystal-cave':[1,29],'wizard-tower':[1,25],
    'floating-island':[22,6]
  };
  const sky=skyByScene[scene]||[22,6];
  const skyMid=sky[0], skyLight=sky[1];
  for(let y=0;y<43;y++){
    const t=y/42;
    const c=t<.25?skyMid:(t<.58?skyLight:skyMid);
    rect(0,y,width,1,c,1);
  }

  // Pixel-clouds: layered, asymmetric, and softly separated.
  const cloud=(x,y,scale=1,c=20)=>{
    rect(x,y+3,18*scale,4*scale,c,3);
    ellipse(x+5*scale,y+3*scale,6*scale,4*scale,c,3);
    ellipse(x+12*scale,y+2*scale,7*scale,5*scale,c,3);
    put(x+17*scale,y+5*scale,c,3);
  };
  if(!['crystal-cave','reading-room','rainy-room','craft-room','fireplace','tea-books'].includes(scene)){
    cloud(10+(index%3)*5,7,0.65,5);
    cloud(82-(index%4)*4,11,0.75,5);
    if(index%2===0) cloud(48,4,0.45,20);
  }

  // Sun / moon / stars.
  if(['flowers','roses','sunflowers','lavender','cherry','meadow','cottage-garden','floral-window',
      'bouquet','butterflies','botanical','spring','fountain','cat-window','fox-meadow',
      'rabbit-garden','deer-lake','hummingbird','floating-island'].includes(scene)){
    ellipse(103,12,8,8,21,7); ellipse(103,12,5,5,7,8);
    for(let a=0;a<8;a++){
      const ang=a*Math.PI/4;
      line(103+Math.cos(ang)*10,12+Math.sin(ang)*10,
           103+Math.cos(ang)*13,12+Math.sin(ang)*13,7,7);
    }
  } else if(['moon-flowers','owl-branch','castle','fairy-garden','wizard-tower'].includes(scene)){
    ellipse(104,12,7,7,30,7); ellipse(107,9,7,7,skyMid,8);
    for(let i=0;i<18;i++) put(5+rnd()*116,3+rnd()*24,pick([20,21,27,30]),9);
  }

  // ---- DISTANT LANDSCAPE --------------------------------------------------
  const mountain=(baseY,peakX,peakY,c)=>{
    line(0,baseY,peakX,peakY,c,4);
    line(peakX,peakY,128,baseY,c,4);
    line(peakX,peakY+4,peakX-20,baseY,c,5);
    line(peakX,peakY+4,peakX+18,baseY,c,5);
  };
  if(['deer-lake','floating-island','fox-meadow','rabbit-garden','lavender','meadow'].includes(scene)){
    mountain(40,24,23,3); mountain(41,70,18,4); mountain(40,109,25,3);
    for(let x=4;x<124;x+=8) line(x,39,x+3,35+(x%5),13,4);
  }

  // Water layer with varied horizontal ripples.
  const waterScenes=['deer-lake','fountain','beach','cat-window'];
  if(waterScenes.includes(scene)){
    rect(0,41,width,21,23,5);
    for(let y=44;y<62;y+=4){
      for(let x=(y%7);x<126;x+=12+rnd()*8){
        const len=3+Math.floor(rnd()*8);
        line(x,y,x+len,y,pick([12,22,27,4]),8);
        if(rnd()>.55) put(x+Math.floor(len/2),y+1,12,8);
      }
    }
  }

  // ---- GROUND -------------------------------------------------------------
  if(!waterScenes.includes(scene)){
    rect(0,41,width,31,15,5);
    // distant ground band
    for(let x=0;x<128;x+=6) put(x,42+(x%4),13,6);
    // foreground patches
    for(let i=0;i<90;i++){
      const x=Math.floor(rnd()*128), y=53+Math.floor(rnd()*19);
      line(x,y,x+(rnd()>.5?1:-1),y-2-rnd()*4,pick([13,14,26,15]),9);
    }
  } else {
    rect(0,62,width,10,13,7);
    for(let i=0;i<55;i++){
      const x=Math.floor(rnd()*128),y=63+Math.floor(rnd()*9);
      put(x,y,pick([13,14,15,20]),9);
    }
  }

  // ---- SCENE STRUCTURES ---------------------------------------------------
  const tree=(x,base,scale=1,leaf=14)=>{
    const trunk=scale>1?19:15;
    rect(x-2*scale,base-25*scale,4*scale,28*scale,trunk,6);
    line(x,base-22*scale,x-10*scale,base-33*scale,15,6);
    line(x,base-20*scale,x+10*scale,base-32*scale,15,6);
    ellipse(x,base-34*scale,11*scale,8*scale,leaf,6);
    ellipse(x-8*scale,base-30*scale,8*scale,6*scale,13,7);
    ellipse(x+8*scale,base-31*scale,8*scale,6*scale,26,7);
    put(x-3*scale,base-38*scale,12,9);
    put(x+4*scale,base-35*scale,14,9);
  };

  if(scene.includes('forest')||['fox-meadow','owl-branch','deer-lake','rabbit-garden','fairy-garden','flowers'].includes(scene)){
    [8,24,106,122].forEach((x,i)=>tree(x,50+(i%2)*4,.8+(i%3)*.15,i%2?14:15));
  }

  if(scene==='cottage-garden'){
    rect(43,27,42,25,19,7);
    // roof
    for(let x=39;x<90;x+=2) line(64,19,x,28,17,8);
    rect(56,39,12,13,1,10);
    rect(48,32,10,9,22,9); rect(70,32,10,9,22,9);
    put(53,36,5,11); put(75,36,5,11);
    rect(40,25,48,4,18,8);
    rect(91,20,4,25,19,7);
  }

  if(['reading-room','rainy-room','craft-room','fireplace','tea-books'].includes(scene)){
    rect(8,11,112,35,19,4);
    rect(13,15,102,28,2,5);
    // wood/floor lines
    for(let y=45;y<72;y+=5) line(0,y,128,y,19,6);
    // window
    rect(76,15,29,21,22,7); rect(79,18,23,15,23,8);
    line(90,18,90,33,20,9); line(79,25,102,25,20,9);
    // rug
    rect(25,52,58,15,16,7); rect(29,55,50,9,18,8);
  }

  if(scene==='reading-room'){
    // armchair
    rect(32,42,25,18,8,9); rect(27,37,34,13,8,9);
    rect(30,48,7,15,8,9); rect(52,48,7,15,8,9);
    // lamp
    rect(91,37,2,15,19,9); rect(86,31,12,7,7,10); put(92,34,21,12);
    // book stack
    rect(68,50,14,3,17,10); rect(70,46,11,3,9,10); rect(72,42,8,3,24,10);
  }

  if(scene==='rainy-room'){
    for(let x=80;x<103;x+=4) line(x,18,x-5,34,22,10);
    rect(42,38,30,14,8,9); rect(37,34,40,8,8,9);
    for(let x=43;x<70;x+=6) put(x,36,9,11);
    rect(100,47,7,17,13,8); ellipse(103,43,10,7,13,7);
  }

  if(scene==='craft-room'){
    rect(34,43,62,6,19,9); rect(42,49,5,18,19,8); rect(84,49,5,18,19,8);
    // jars / spools
    for(let x=43;x<89;x+=9){
      rect(x,34,6,9,pick([22,23,24,25,27]),9);
      put(x+2,36,21,11); put(x+4,39,8,11);
    }
    // thread
    for(let i=0;i<6;i++) ellipse(39+i*10,29,4,3,[8,9,10,17,21,24][i],9);
    line(42,27,77,22,9,10); line(77,22,93,31,10,10);
  }

  if(scene==='fireplace'){
    rect(40,26,48,27,17,7); rect(47,32,34,18,1,8);
    rect(53,39,22,10,17,10);
    ellipse(64,43,9,9,28,11); ellipse(64,40,5,8,21,12); put(64,34,6,13);
    rect(16,34,16,4,19,8); rect(97,34,16,4,19,8);
    for(let x=12;x<120;x+=15) put(x,30+(x%6),20,9);
  }

  if(scene==='tea-books'){
    rect(40,43,50,6,19,9); rect(45,49,4,19,19,8); rect(81,49,4,19,19,8);
    // teacup
    ellipse(62,38,8,5,20,9); rect(55,37,14,6,20,9); ellipse(62,37,5,3,6,10);
    line(70,39,75,39,20,10); ellipse(75,40,3,3,20,10);
    // books
    rect(90,46,20,4,17,10); rect(93,42,17,4,24,10); rect(96,38,14,4,9,10);
  }

  // ---- GARDEN / FLOWER SYSTEM --------------------------------------------
  const flower=(x,y,petal,center=7,scale=1)=>{
    line(x,y+2*scale,x,y+9*scale,14,10);
    put(x-2,y+6*scale,13,10); put(x+2,y+7*scale,26,10);
    ellipse(x,y,3*scale,2*scale,petal,10);
    put(x,y,center,12);
    put(x-1,y-1,petal===21?6:27,11);
  };
  const flowerPalette={
    flowers:[8,9,10,21,24],roses:[8,9,24,17],sunflowers:[21],lavender:[10,25],
    cherry:[9,20],meadow:[8,9,10,21,24], 'cottage-garden':[8,9,21,24],
    'moon-flowers':[27,30,9], 'floral-window':[8,9,21,24],
    bouquet:[8,9,10,21,24],butterflies:[8,9,10,21],botanical:[12,14,26],
    spring:[8,9,21,24],fountain:[8,9,10,21]
  };
  if(flowerPalette[scene]){
    const colors=flowerPalette[scene];
    const rows=scene==='sunflowers'?2:3;
    for(let row=0;row<rows;row++){
      const start=8+(row%2)*5;
      for(let x=start;x<124;x+=10+((row+index)%3)){
        const y=36+row*8-Math.floor((x+index)%5);
        flower(x,y,pick(colors),scene==='sunflowers'?17:7,scene==='sunflowers'?1.25:1);
      }
    }
  }

  if(scene==='lavender'){
    for(let x=8;x<124;x+=7){
      line(x,69,x+(x%3)-1,43,14,9);
      for(let y=44;y<63;y+=5) put(x+(y%3),y,10,10);
    }
  }

  if(scene==='cherry'){
    for(let x=18;x<112;x+=15){
      line(x,47,x+((x%5)-2),16,19,6);
      line(x,24,x-10,19,19,6); line(x+2,27,x+12,21,19,6);
      for(let j=0;j<5;j++) ellipse(x-9+j*5,17+(j%3)*5,3,2,9,10);
    }
  }

  // ---- FOUNTAIN / CASTLE / FANTASY ---------------------------------------
  if(scene==='fountain'){
    ellipse(64,51,27,9,19,8); ellipse(64,49,22,6,23,9);
    rect(59,32,10,17,19,9); ellipse(64,31,7,3,27,10);
    line(64,30,56,20,12,10); line(64,30,64,17,12,10); line(64,30,72,20,12,10);
    for(let x=39;x<91;x+=8) put(x,51+(x%5),pick([8,9,10,21]),11);
  }

  if(scene==='castle'){
    rect(47,25,34,28,19,9); rect(39,18,12,35,19,9); rect(77,14,12,39,19,9);
    rect(44,10,7,8,17,10); rect(79,6,8,9,17,10);
    rect(58,39,12,14,1,11);
    for(let x=42;x<88;x+=9) rect(x,29,5,6,21,11);
    line(35,54,95,54,18,9);
    for(let x=36;x<96;x+=5) line(x,54,64,62,19,7);
  }

  if(scene==='fairy-garden'){
    // arch
    line(34,45,34,25,19,9); line(34,25,64,17,19,9); line(64,17,94,25,19,9); line(94,25,94,45,19,9);
    for(let x=39;x<91;x+=8) flower(x,25+(x%4),pick([8,9,10,21]),7);
    for(let i=0;i<16;i++){put(18+rnd()*92,24+rnd()*35,pick([7,21,27,30]),12);}
  }

  if(scene==='crystal-cave'){
    rect(0,42,width,30,29,4);
    for(let x=4;x<126;x+=10){
      const h=10+Math.floor(rnd()*24);
      line(x,42,x+4,42-h,25,8);
      line(x+4,42-h,x+9,42,10,9);
      put(x+4,42-h+3,27,11);
    }
    ellipse(64,59,27,7,23,7);
    for(let x=41;x<88;x+=8) line(x,58,x+5,58,12,10);
  }

  if(scene==='wizard-tower'){
    rect(52,18,24,35,19,9); rect(47,14,34,5,18,9);
    rect(56,39,16,14,1,11);
    for(let x=55;x<74;x+=7) rect(x,25,4,6,21,11);
    ellipse(101,11,7,7,30,8);
    for(let i=0;i<22;i++) put(5+rnd()*115,3+rnd()*24,pick([20,21,27,30]),12);
    // constellation
    line(18,15,28,8,30,11); line(28,8,39,13,30,11); put(18,15,30,12); put(28,8,30,12); put(39,13,30,12);
  }

  if(scene==='floating-island'){
    ellipse(64,37,36,7,4,8); rect(36,37,56,5,4,8);
    for(let x=39;x<91;x+=7) line(x,42,x-5+(x%9),55,23,9);
    // clouds underneath
    ellipse(27,58,18,6,5,6); ellipse(98,56,20,7,5,6);
    mountain(33,25,20,3); mountain(33,82,17,4);
  }

  // ---- MAIN ANIMAL --------------------------------------------------------
  const animalType=animalTypeForScene(scene);
  if(animalType){
    const template=normalizeAnimalTemplate(ANIMAL_TEMPLATES[animalType]);
    const scale=template.renderScale;
    const renderedWidth=Math.round(template.width*scale);
    const renderedHeight=Math.round(template.height*scale);

    // Vary the focal placement slightly, but keep the subject safely inside the frame.
    let centerX=64, centerY=40;
    if(scene.includes('window')) centerX=58;
    if(scene.includes('meadow')) centerX=69;
    if(scene==='owl-branch') { centerX=73; centerY=35; }
    if(scene==='hummingbird') { centerX=84; centerY=34; }

    const originX=Math.max(3,Math.min(width-renderedWidth-3,Math.round(centerX-renderedWidth/2)));
    const originY=Math.max(5,Math.min(height-renderedHeight-6,Math.round(centerY-renderedHeight/2)));

    // First establish the silhouette.
    template.mask.forEach((row,rowIndex)=>{
      [...row].forEach((cell,columnIndex)=>{
        if(cell!=='.'){
          for(let sy=0;sy<scale;sy++) for(let sx=0;sx<scale;sx++){
            lockPut(
              originX+Math.floor(columnIndex*scale)+sx,
              originY+Math.floor(rowIndex*scale)+sy,
              template.colors.body,10
            );
          }
        }
      });
    });

    const inside=(x,y)=>x>=0&&x<width&&y>=0&&y<height&&locked.has(y*width+x);
    const shade=template.colors.shadow||1;
    const hi=template.colors.highlight||template.colors.white||6;
    const light=template.colors.muzzle||template.colors.chest||template.colors.white||hi;

    // Edge shading gives the animal volume instead of a flat single-color blob.
    for(const cellIndex of [...locked]){
      const x=cellIndex%width,y=Math.floor(cellIndex/width);
      const row=y-originY,col=x-originX;
      const top=!inside(x,y-1)||!inside(x-1,y)||!inside(x+1,y);
      if(top && row>Math.floor(renderedHeight*.28)) lockPut(x,y,shade,12);
      if(row<Math.floor(renderedHeight*.23) && col%3===0) lockPut(x,y,hi,12);
      if(col>Math.floor(renderedWidth*.48) && row>Math.floor(renderedHeight*.55) && col%4===0) lockPut(x,y,shade,12);
    }

    const mark=(x,y,color)=>{
      if(inside(x,y)) lockPut(x,y,color,14);
    };

    // Species-aware facial details.
    const fx=originX+Math.floor(renderedWidth*.5);
    const fy=originY+Math.floor(renderedHeight*.35);
    if(animalType==='owl'){
      mark(fx-6,fy,template.colors.eye||21); mark(fx+6,fy,template.colors.eye||21);
      mark(fx,fy+5,template.colors.beak||7);
      for(let d=-10;d<=10;d+=4){mark(fx+d,fy+8,template.colors.wing||shade);}
    } else if(animalType==='hummingbird'){
      mark(fx-3,fy,template.colors.highlight||21); mark(fx+3,fy,template.colors.highlight||21);
      line(fx+7,fy+4,fx+18,fy+1,template.colors.beak||7,14);
      line(fx-3,fy+7,fx-13,fy-1,template.colors.wing||10,13);
    } else {
      mark(originX+Math.floor(renderedWidth*.40),fy,template.colors.eye||1);
      mark(originX+Math.floor(renderedWidth*.60),fy,template.colors.eye||1);
      mark(fx,originY+Math.floor(renderedHeight*.49),template.colors.nose||17);
      // muzzle/chest cluster
      for(let dx=-4;dx<=4;dx+=2){
        mark(fx+dx,originY+Math.floor(renderedHeight*.56),light);
      }
      for(let dx=-7;dx<=7;dx+=3){
        if(rnd()>.2) mark(fx+dx,originY+Math.floor(renderedHeight*.68),light);
      }
    }

    // Characteristic markings.
    if(animalType==='fox'){
      for(let y=originY+Math.floor(renderedHeight*.48);y<originY+Math.floor(renderedHeight*.9);y+=4)
        for(let x=originX+Math.floor(renderedWidth*.18);x<originX+Math.floor(renderedWidth*.82);x+=7)
          if(inside(x,y)&&rnd()>.45) lockPut(x,y,template.colors.shadow||1,13);
      for(let y=originY+Math.floor(renderedHeight*.12);y<originY+Math.floor(renderedHeight*.45);y+=3)
        if(inside(fx-8,y)) mark(fx-8,y,template.colors.muzzle||6);
    }
    if(animalType==='cat'){
      for(let d=-5;d<=5;d+=2){mark(fx+d,fy+7,template.colors.shadow||3);}
      line(fx-5,fy+9,fx-13,fy+8,template.colors.muzzle||5,13);
      line(fx+5,fy+9,fx+13,fy+8,template.colors.muzzle||5,13);
    }
    if(animalType==='rabbit'){
      for(let y=originY+Math.floor(renderedHeight*.1);y<originY+Math.floor(renderedHeight*.3);y+=3)
        mark(fx-8,y,template.colors.highlight||6);
      mark(fx,fy+5,template.colors.nose||17);
    }
    if(animalType==='deer'){
      line(fx,originY+2,fx-8,originY-7,template.colors.highlight||21,13);
      line(fx,originY+2,fx+8,originY-7,template.colors.highlight||21,13);
      line(fx-8,originY-7,fx-12,originY-10,template.colors.highlight||21,13);
      line(fx+8,originY-7,fx+12,originY-10,template.colors.highlight||21,13);
    }

    const subjectCells=[...locked].length;
    if(subjectCells<Math.floor(width*height*.10))
      console.error('Animal subject is too small:',spec[0],subjectCells);
  }

  // ---- FOREGROUND FRAMING / MICRO DETAILS --------------------------------
  // Vines and grasses frame the lower corners so the artwork does not feel empty.
  for(let side=0;side<2;side++){
    const baseX=side===0?5:123;
    for(let i=0;i<5;i++){
      const x=baseX+(side===0?i*2:-i*2);
      line(x,71,x+(side===0?6:-6),58-i*2,14,9);
      if((i+index)%2===0) put(x+(side===0?4:-4),58-i*2,26,10);
    }
  }

  // Scene-specific little objects make each picture feel illustrated.
  if(scene.includes('garden')||scene==='meadow'||scene==='flowers'){
    for(let i=0;i<14;i++){
      const x=8+Math.floor(rnd()*112),y=47+Math.floor(rnd()*19);
      put(x,y,pick([8,9,10,21,24]),10);
      if(rnd()>.55) put(x+1,y+1,13,9);
    }
  }
  if(scene==='fox-meadow'||scene==='rabbit-garden'||scene==='deer-lake'){
    for(let i=0;i<7;i++){
      const x=12+Math.floor(rnd()*104),y=43+Math.floor(rnd()*20);
      ellipse(x,y,2,1,pick([20,21,27,30]),11);
    }
  }
  if(scene==='butterflies'||scene==='hummingbird'){
    for(let i=0;i<8;i++){
      const x=12+Math.floor(rnd()*104),y=18+Math.floor(rnd()*38);
      put(x,y,24,12); put(x+2,y,9,12); put(x+1,y+1,7,13);
    }
  }

  // A restrained border/frame gives the finished piece a cleaner presentation.
  for(let x=0;x<width;x++){
    put(x,0,2,1); put(x,height-1,2,1);
  }
  for(let y=0;y<height;y++){
    put(0,y,2,1); put(width-1,y,2,1);
  }

  // Staged reveal: background first, focal subject and highlights later.
  const revealOrder=Array.from({length:pixels.length},(_,i)=>i);
  shuffle(revealOrder);

  return {
    id:spec[0],
    name:spec[1],
    description:spec[2],
    category:animalType?'Animal':'Detailed',
    primarySubject:animalType,
    animalMask:animalType?normalizeAnimalTemplate(ANIMAL_TEMPLATES[animalType]).mask:null,
    animalTemplate:animalType?normalizeAnimalTemplate(ANIMAL_TEMPLATES[animalType]):null,
    width,height,
    palette:detailedPalette.map(entry=>({...entry})),
    pixels:pixels.map(colorNumber=>colorNumber-1),
    stages,
    revealOrder
  };
}

const detailedArtworks=detailedSceneSpecs.map((spec,index)=>createDetailedArtwork(spec,index));
function validateAnimalArtwork(artwork){if(artwork.category!=='Animal')return true;const template=artwork.animalTemplate;if(!template||!template.mask.length){console.error('Animal template missing:',artwork.id);return false;}const occupied=new Set();template.mask.forEach((row,rowIndex)=>[...row].forEach((cell,columnIndex)=>{if(cell!=='.'){for(let sy=0;sy<template.renderScale;sy++)for(let sx=0;sx<template.renderScale;sx++)occupied.add((Math.floor(rowIndex*template.renderScale)+sy)*128+Math.floor(columnIndex*template.renderScale)+sx);}}));if(occupied.size<128*72*.1){console.error('Animal template subject too small:',artwork.id,occupied.size);return false;}return true;}
detailedArtworks.forEach(validateArtwork); detailedArtworks.filter(validateAnimalArtwork); artworks.push(...detailedArtworks);

const canvas=document.getElementById('artCanvas'),ctx=canvas.getContext('2d'),adminCanvas=document.getElementById('adminCanvas'),adminCtx=adminCanvas.getContext('2d'),el=id=>document.getElementById(id);
let canvasOffsetX=0,canvasOffsetY=0;
const BASE_INTERVAL=1200;
const sandSpecs=['Sunset Beach','Tropical Beach','Desert Dunes','Mountain Sunset','Ocean Horizon','Palm Tree Sunset','Lighthouse','Desert Moon','Aurora Landscape','Canyon','Waterfall','Forest','Moonlit Lake','Starry Desert','Volcano Sunset','Island','Hidden Valley','Rainbow Mountains','Night Beach','Dreamy Landscape'];
const sandArtworks=sandSpecs.map((name,index)=>({...artworks[index],id:`sand-${index}`,name,description:`A slow glass landscape of ${name.toLowerCase()}.`}));
sandArtworks.push(...detailedArtworks.map(artwork=>({...artwork,id:`sand-${artwork.id}`,name:`Sand · ${artwork.name}`,type:'sand'})));
const INTRO_MS=5000,FINISHED_MS=60000,TRANSITION_MS=5000;
const state={artworkIndex:0,artwork:artworks[0],placed:0,placedPixels:[],paused:false,overnight:false,streamMode:false,hideHud:false,speed:1,timer:null,holdTimer:null,phaseTimer:null,lastColor:null,audio:null,audioEnabled:false,hudTimer:null,resolution:'responsive',revealMode:'random',adminArtworkIndex:0,adminMode:false,adminPreviewMode:'finished',mode:'diamond',sandArtworkIndex:0,sandArtwork:sandArtworks[0],sandOrder:[],sandCursor:0,sandSettled:[],sandParticles:[],sandFrame:null,sandSpawnTime:0,phase:'intro'};
let diamondArtworkQueue=[], sandArtworkQueue=[], diamondQueueIndex=0, sandQueueIndex=0;
function createArtworkQueue(collection,lastIndex=-1){let queue=shuffle(collection.map((_,index)=>index));if(queue.length>1&&queue[0]===lastIndex)[queue[0],queue[1]]=[queue[1],queue[0]];return queue;}
function nextQueuedIndex(collection,queueName,indexName,lastIndex){let queue=queueName==='diamond'?diamondArtworkQueue:sandArtworkQueue;let queueIndex=queueName==='diamond'?diamondQueueIndex:sandQueueIndex;if(!queue.length||queueIndex>=queue.length){queue=createArtworkQueue(collection,lastIndex);queueIndex=0;}const selected=queue[queueIndex++];if(queueName==='diamond'){diamondArtworkQueue=queue;diamondQueueIndex=queueIndex;}else{sandArtworkQueue=queue;sandQueueIndex=queueIndex;}return selected;}
diamondArtworkQueue=createArtworkQueue(artworks,0);sandArtworkQueue=createArtworkQueue(sandArtworks,0);
function createSandOrder(artwork){const revealOrder=[];for(let row=artwork.height-1;row>=0;row--)for(let column=0;column<artwork.width;column++)revealOrder.push(row*artwork.width+column);return revealOrder;}
function sandReset(){state.sandOrder=createSandOrder(state.sandArtwork);state.sandCursor=0;state.sandSettled=[];state.sandParticles=[];state.sandSpawnTime=0;}
function clearCycleTimers(){clearTimeout(state.timer);clearTimeout(state.holdTimer);clearTimeout(state.phaseTimer);cancelAnimationFrame(state.sandFrame);}
function startArtworkCycle(mode,index){clearCycleTimers();state.mode=mode;state.phase='intro';state.paused=false;state.placed=0;state.placedPixels=[];if(mode==='sand'){state.sandArtworkIndex=index;state.sandArtwork=sandArtworks[index];sandReset();}else{state.artworkIndex=index;state.artwork=artworks[index];state.artwork.revealOrder=createRevealOrder(state.artwork,state.revealMode);}document.body.classList.toggle('sand-mode',mode==='sand');el('paintingTray').classList.toggle('sand-glass',mode==='sand');el('diamondModeButton').classList.toggle('active',mode==='diamond');el('sandModeButton').classList.toggle('active',mode==='sand');el('placementWhisper').textContent='Preparing something new...';mode==='sand'?renderSand():render();updateHud();if(state.adminMode){updateAdminDashboard();renderAdminPreview();renderLibrary();}state.phaseTimer=setTimeout(beginCreation,INTRO_MS);}
function beginCreation(){if(state.phase!=='intro')return;state.phase='creating';el('placementWhisper').textContent='a quiet diamond finds its place';if(state.mode==='sand'){state.sandFrame=requestAnimationFrame(animateSand);}else schedulePlacement();updateHud();}
function completeArtwork(){if(state.phase==='finished'||state.phase==='transition')return;clearTimeout(state.timer);cancelAnimationFrame(state.sandFrame);state.phase='finished';el('placementWhisper').textContent='✦ Complete ✦';if(state.mode==='diamond')render();else renderSand();updateHud();if(state.adminMode)updateAdminDashboard();state.phaseTimer=setTimeout(beginTransition,FINISHED_MS);}
function beginTransition(){if(state.phase!=='finished')return;state.phase='transition';document.body.classList.add('cycle-transition');el('placementWhisper').textContent=`Next: New ${state.mode==='diamond'?'Diamond Painting':'Falling Sand'}`;state.phaseTimer=setTimeout(()=>{document.body.classList.remove('cycle-transition');if(state.overnight)startNextCycle();else startNextArtworkSameMode();},TRANSITION_MS);}
function chooseDifferent(collection,current){const options=collection.map((_,index)=>index).filter(index=>index!==current);return options[Math.floor(Math.random()*options.length)];}
function startNextArtworkSameMode(){const collection=state.mode==='sand'?sandArtworks:artworks;const queueName=state.mode==='sand'?'sand':'diamond';const indexName=queueName==='sand'?'sandQueueIndex':'diamondQueueIndex';const currentIndex=state.mode==='sand'?state.sandArtworkIndex:state.artworkIndex;const nextIndex=nextQueuedIndex(collection,queueName,indexName,currentIndex);startArtworkCycle(state.mode,nextIndex);}
function startNextCycle(){const nextMode=state.mode==='diamond'?'sand':'diamond';const nextIndex=nextMode==='sand'?nextQueuedIndex(sandArtworks,'sand','sandQueueIndex',state.sandArtworkIndex):nextQueuedIndex(artworks,'diamond','diamondQueueIndex',state.artworkIndex);startArtworkCycle(nextMode,nextIndex);}
function finishNow(){if(state.phase==='finished'||state.phase==='transition')return;if(state.mode==='diamond'){state.placedPixels=state.artwork.pixels.map(entry=>state.artwork.palette[entry].color);state.placed=state.artwork.pixels.length;completeArtwork();}else{state.sandParticles=[];state.sandSettled=state.sandArtwork.pixels.map(entry=>state.sandArtwork.palette[entry].color);state.sandCursor=state.sandOrder.length;completeArtwork();}}
function renderSand(){const artwork=state.sandArtwork;ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle=artwork.palette[0].color;ctx.fillRect(0,0,canvas.width,canvas.height);const cellW=canvas.width/artwork.width,cellH=canvas.height/artwork.height;state.sandSettled.forEach((color,index)=>{if(color)drawSquareDiamond(index%artwork.width,Math.floor(index/artwork.width),color,cellW,cellH);});state.sandParticles.forEach(particle=>{ctx.fillStyle=particle.color;ctx.fillRect(particle.x,particle.y,particle.size,particle.size);});}
function animateSand(time){if(state.mode!=='sand'||state.phase!=='creating')return;if(!state.paused){const releaseDelay=500/state.speed;if(!state.sandParticles.length&&state.sandCursor<state.sandOrder.length&&time-state.sandSpawnTime>=releaseDelay){const index=state.sandOrder[state.sandCursor],entry=state.sandArtwork.palette[state.sandArtwork.pixels[index]];if(!entry){console.error('Invalid sand color:',index,state.sandArtwork.pixels[index]);return;}state.sandParticles.push({index,x:(index%state.sandArtwork.width)*canvas.width/state.sandArtwork.width+canvas.width/state.sandArtwork.width*.35,y:-8,velocityX:0.12,velocityY:0.3,gravity:0.006,color:entry.color,size:Math.max(2,canvas.width/state.sandArtwork.width*.3)});state.sandSpawnTime=time;}const cellH=canvas.height/state.sandArtwork.height;state.sandParticles=state.sandParticles.filter(particle=>{particle.velocityY+=particle.gravity;particle.x+=particle.velocityX;particle.y+=particle.velocityY;const targetY=Math.floor(particle.index/state.sandArtwork.width)*cellH+cellH*.45;if(particle.y>=targetY){state.sandSettled[particle.index]=particle.color;state.sandCursor++;return false;}return true;});}renderSand();updateHud();if(state.sandCursor>=state.sandOrder.length&&!state.sandParticles.length){completeArtwork();return;}state.sandFrame=requestAnimationFrame(animateSand);}
function enterMode(mode){const index=mode==='sand'?state.sandArtworkIndex:state.artworkIndex;startArtworkCycle(mode,index);}
function resizeCanvas(){const sizes={'1920x1080':[1920,1080],'1280x720':[1280,720],responsive:[960,540]};[canvas.width,canvas.height]=sizes[state.resolution];state.mode==='sand'?renderSand():render();}
function render(){const artwork=state.artwork,cellW=canvas.width/artwork.width,cellH=canvas.height/artwork.height;ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle=artwork.palette[0].color;ctx.fillRect(0,0,canvas.width,canvas.height);for(let index=0;index<artwork.pixels.length;index++){const gridX=index%artwork.width,gridY=Math.floor(index/artwork.width),color=state.placedPixels[index];if(color)drawSquareDiamond(gridX,gridY,color,cellW,cellH);else drawNumberedCell(gridX,gridY,artwork.pixels[index]+1,cellW,cellH);}}
function drawNumberedCell(gridX,gridY,number,cellW,cellH){const x=gridX*cellW,y=gridY*cellH,size=Math.min(cellW,cellH),inset=Math.max(1,size*.055);ctx.fillStyle='rgba(8,28,36,0.78)';ctx.fillRect(x+inset,y+inset,size-inset*2,size-inset*2);ctx.fillStyle='rgba(233,228,210,0.72)';ctx.font=`500 ${Math.max(8,size*.34)}px "DM Mono", monospace`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(number,x+size/2,y+size/2);ctx.strokeStyle='rgba(95,166,161,0.18)';ctx.lineWidth=1;ctx.strokeRect(x+inset,y+inset,size-inset*2,size-inset*2);}
function drawSquareDiamond(gridX,gridY,color,cellW,cellH){if(!color){console.error('Cannot draw square diamond without a color:',gridX,gridY);return;}const x=gridX*cellW,y=gridY*cellH,size=Math.min(cellW,cellH),inset=Math.max(1,size*.055);ctx.fillStyle=color;ctx.fillRect(x+inset,y+inset,size-inset*2,size-inset*2);ctx.fillStyle='rgba(255,255,255,0.08)';ctx.fillRect(x+inset+1,y+inset+1,Math.max(1,size*.18),Math.max(1,size*.18));ctx.strokeStyle='rgba(8,28,36,0.24)';ctx.lineWidth=Math.max(1,size*.018);ctx.strokeRect(x+inset,y+inset,size-inset*2,size-inset*2);}
function updateCurrentColor(paletteEntry){if(!paletteEntry){console.error('Cannot update current diamond without a palette entry.');return;}el('currentNumber').textContent=`#${paletteEntry.number}`;el('currentColor').textContent=paletteEntry.name;el('currentSwatch').style.backgroundColor=paletteEntry.color;}
function updateHud(){const artwork=state.mode==='sand'?state.sandArtwork:state.artwork,collection=state.mode==='sand'?sandArtworks:artworks,completed=state.mode==='sand'?state.sandSettled.filter(Boolean).length:state.placed,progress=Math.round(completed/artwork.pixels.length*100),nextIndex=state.mode==='sand'?state.sandOrder[Math.min(state.sandCursor,state.sandOrder.length-1)]:artwork.revealOrder[Math.min(completed,artwork.revealOrder.length-1)],nextEntry=artwork.palette[artwork.pixels[nextIndex]];el('artName').textContent=artwork.name;el('artDescription').textContent=artwork.description;el('progressText').textContent=`${progress}%`;el('progressFill').style.width=`${progress}%`;el('artCounter').textContent=`${String((state.mode==='sand'?state.sandArtworkIndex:state.artworkIndex)+1).padStart(2,'0')} / ${String(collection.length).padStart(2,'0')}`;el('currentDiamondLabel').textContent=state.mode==='sand'?'Current Sand':'Current Diamond';updateCurrentColor(nextEntry);el('palette').innerHTML=artwork.palette.map(entry=>`<div class="color-key-item"><b>${entry.number}</b><span title="${entry.name}" style="background-color:${entry.color}"></span><em>${entry.name}</em></div>`).join('');el('finishedMessage').classList.toggle('visible',progress===100);el('statusDot').classList.toggle('paused',state.paused);}
function drawAdminCell(targetCtx,artwork,index,cellW,cellH,finished){const x=(index%artwork.width)*cellW,y=Math.floor(index/artwork.width)*cellH,size=Math.min(cellW,cellH),inset=Math.max(1,size*.055),entry=artwork.palette[artwork.pixels[index]];if(!entry){console.error('Invalid preview color:',index,artwork.pixels[index]);return;}if(finished){targetCtx.fillStyle=entry.color;targetCtx.fillRect(x+inset,y+inset,size-inset*2,size-inset*2);targetCtx.fillStyle='rgba(255,255,255,0.08)';targetCtx.fillRect(x+inset+1,y+inset+1,Math.max(1,size*.18),Math.max(1,size*.18));}else{targetCtx.fillStyle='rgba(8,28,36,0.78)';targetCtx.fillRect(x+inset,y+inset,size-inset*2,size-inset*2);targetCtx.fillStyle='rgba(233,228,210,0.72)';targetCtx.font=`500 ${Math.max(8,size*.34)}px "DM Mono", monospace`;targetCtx.textAlign='center';targetCtx.textBaseline='middle';targetCtx.fillText(entry.number,x+size/2,y+size/2);}targetCtx.strokeStyle='rgba(8,28,36,0.24)';targetCtx.lineWidth=1;targetCtx.strokeRect(x+inset,y+inset,size-inset*2,size-inset*2);}
function adminCollection(){return state.mode==='sand'?sandArtworks:artworks;}
function renderAdminPreview(artwork=adminCollection()[state.adminArtworkIndex],finished=state.adminPreviewMode==='finished'){adminCtx.clearRect(0,0,adminCanvas.width,adminCanvas.height);adminCtx.fillStyle=artwork.palette[0].color;adminCtx.fillRect(0,0,adminCanvas.width,adminCanvas.height);const cellW=adminCanvas.width/artwork.width,cellH=adminCanvas.height/artwork.height;for(let index=0;index<artwork.pixels.length;index++)drawAdminCell(adminCtx,artwork,index,cellW,cellH,finished);el('adminPreviewLabel').textContent=finished?'Finished artwork preview':'Numbered pattern preview';}
function updateAdminDashboard(){const artwork=state.mode==='sand'?state.sandArtwork:state.artwork,completed=state.mode==='sand'?state.sandSettled.filter(Boolean).length:state.placed,progress=Math.round(completed/artwork.pixels.length*100),order=state.mode==='sand'?state.sandOrder:artwork.revealOrder,nextIndex=order[Math.min(state.mode==='sand'?state.sandCursor:completed,order.length-1)],entry=artwork.palette[artwork.pixels[nextIndex]],status={intro:'Preparing...',creating:'Creating...',finished:'Finished display',transition:'Transitioning...'}[state.phase]||state.phase;el('adminArtworkName').textContent=artwork.name;el('adminArtworkDescription').textContent=artwork.description;el('adminStatus').textContent=status;el('adminNextMode').textContent=state.mode==='diamond'?'Falling Sand':'Diamond Painting';el('adminProgress').textContent=`${progress}%`;el('adminCurrentDiamond').textContent=`#${entry.number} · ${entry.name}`;el('adminRemaining').textContent=(artwork.pixels.length-completed).toLocaleString();el('adminCompleted').textContent=completed.toLocaleString();el('adminTotal').textContent=artwork.pixels.length.toLocaleString();el('adminFinishedDisplay').textContent=state.phase==='finished'?'60 seconds remaining':'60 seconds';}
function renderLibrary(){const library=el('artworkLibrary'),collection=adminCollection();library.innerHTML='';collection.forEach((artwork,index)=>{const card=document.createElement('button');card.type='button';card.className=`artwork-card${index===state.adminArtworkIndex?' selected':''}`;card.dataset.artworkIndex=index;card.innerHTML=`<canvas width="144" height="108"></canvas><span>${artwork.name}</span>`;library.appendChild(card);const thumb=card.querySelector('canvas'),thumbCtx=thumb.getContext('2d');const cellW=thumb.width/artwork.width,cellH=thumb.height/artwork.height;thumbCtx.fillStyle=artwork.palette[0].color;thumbCtx.fillRect(0,0,thumb.width,thumb.height);artwork.pixels.forEach((_,pixelIndex)=>drawAdminCell(thumbCtx,artwork,pixelIndex,cellW,cellH,true));});}
function openAdmin(){state.adminMode=true;el('adminPanel').hidden=false;state.adminArtworkIndex=state.mode==='sand'?state.sandArtworkIndex:state.artworkIndex;state.adminPreviewMode='finished';updateAdminDashboard();renderAdminPreview();renderLibrary();}
function closeAdmin(){state.adminMode=false;el('adminPanel').hidden=true;}
function schedulePlacement(delay){clearTimeout(state.timer);if(!state.paused&&state.placed<state.artwork.revealOrder.length)state.timer=setTimeout(placeNextDiamond,delay===undefined?BASE_INTERVAL/state.speed:delay);}
function placeNextDiamond(){if(state.mode!=='diamond'||state.phase!=='creating'||state.paused)return;const pixelIndex=state.artwork.revealOrder[state.placed],colorIndex=state.artwork.pixels[pixelIndex];if(colorIndex===undefined||colorIndex===null||colorIndex<0||colorIndex>=state.artwork.palette.length){console.error('Invalid pixel color:',pixelIndex,colorIndex);return;}const paletteEntry=state.artwork.palette[colorIndex];if(!paletteEntry||!paletteEntry.color){console.error('Undefined artwork color:',pixelIndex,colorIndex);return;}const color=paletteEntry.color;state.placedPixels[pixelIndex]=color;state.lastColor=color;updateCurrentColor(paletteEntry);state.placed++;render();updateHud();if(state.adminMode)updateAdminDashboard();playPlacementSound();if(state.placed>=state.artwork.revealOrder.length){completeArtwork();return;}schedulePlacement();}
function chooseArtwork(index){if(state.mode==='sand'){state.sandArtworkIndex=index;sandArtworkQueue=createArtworkQueue(sandArtworks,index);sandQueueIndex=0;startArtworkCycle('sand',index);}else{state.artworkIndex=index;diamondArtworkQueue=createArtworkQueue(artworks,index);diamondQueueIndex=0;startArtworkCycle('diamond',index);}}
function nextArtwork(){const collection=state.mode==='sand'?sandArtworks:artworks;const queueName=state.mode==='sand'?'sand':'diamond';const current=state.mode==='sand'?state.sandArtworkIndex:state.artworkIndex;startArtworkCycle(state.mode,nextQueuedIndex(collection,queueName,queueName==='sand'?'sandQueueIndex':'diamondQueueIndex',current));}
function togglePause(){state.paused=!state.paused;el('pauseButton').innerHTML=state.paused?'<span>▶</span> Resume':'<span>Ⅱ</span> Pause';updateHud();if(state.paused)clearTimeout(state.timer);else if(state.mode==='diamond'&&state.phase==='creating')schedulePlacement(400);}
function toggleOvernight(){state.overnight=!state.overnight;el('overnightButton').classList.toggle('active',state.overnight);if(state.overnight&&state.phase==='finished')state.phaseTimer=setTimeout(beginTransition,FINISHED_MS);}
function triggerShake(){const tray=el('paintingTray');tray.classList.remove('shaking');void tray.offsetWidth;tray.classList.add('shaking');setTimeout(()=>tray.classList.remove('shaking'),3400);}
function resetHudTimer(){if(!state.hideHud)return;document.body.classList.remove('hide-hud');clearTimeout(state.hudTimer);state.hudTimer=setTimeout(()=>document.body.classList.add('hide-hud'),6500);}
function toggleSound(enabled){state.audioEnabled=enabled;el('soundToggle').nextElementSibling.nextElementSibling.textContent=enabled?'Sound On':'Sound Off';if(enabled&&!state.audio){const AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext)state.audio=new AudioContext();}}
function playPlacementSound(){if(!state.audioEnabled||!state.audio)return;const oscillator=state.audio.createOscillator(),gain=state.audio.createGain();oscillator.type='sine';oscillator.frequency.value=390+(state.placed%4)*24;gain.gain.setValueAtTime(.0001,state.audio.currentTime);gain.gain.exponentialRampToValueAtTime(.014,state.audio.currentTime+.02);gain.gain.exponentialRampToValueAtTime(.0001,state.audio.currentTime+.25);oscillator.connect(gain).connect(state.audio.destination);oscillator.start();oscillator.stop(state.audio.currentTime+.26);}
el('newArtButton').addEventListener('click',nextArtwork);el('pauseButton').addEventListener('click',togglePause);el('overnightButton').addEventListener('click',toggleOvernight);el('speedSelect').addEventListener('change',e=>{state.speed=Number(e.target.value);schedulePlacement();el('customSpeed').value=state.speed;el('customSpeedValue').textContent=`${state.speed.toFixed(1)}x`;});el('customSpeed').addEventListener('input',e=>{state.speed=Number(e.target.value);el('customSpeedValue').textContent=`${state.speed.toFixed(1)}x`;schedulePlacement();});el('revealSelect').addEventListener('change',e=>{state.revealMode=e.target.value;if(state.mode==='diamond')chooseArtwork(state.artworkIndex);else sandReset();});el('diamondModeButton').addEventListener('click',()=>enterMode('diamond'));el('sandModeButton').addEventListener('click',()=>enterMode('sand'));el('fullscreenButton').addEventListener('click',()=>{if(!document.fullscreenElement)document.documentElement.requestFullscreen?.();else document.exitFullscreen?.();});el('hideHudToggle').addEventListener('change',e=>{state.hideHud=e.target.checked;if(!state.hideHud){clearTimeout(state.hudTimer);document.body.classList.remove('hide-hud');}else resetHudTimer();});el('soundToggle').addEventListener('change',e=>toggleSound(e.target.checked));el('streamModeToggle').addEventListener('change',e=>{state.streamMode=e.target.checked;document.body.classList.toggle('stream-mode',state.streamMode);});el('resolutionSelect').addEventListener('change',e=>{state.resolution=e.target.value;resizeCanvas();});
el('adminPreviewButton').addEventListener('click',openAdmin);el('closeAdminButton').addEventListener('click',closeAdmin);el('returnStreamButton').addEventListener('click',closeAdmin);el('finishedPreviewButton').addEventListener('click',()=>{state.adminPreviewMode='finished';renderAdminPreview();});el('patternPreviewButton').addEventListener('click',()=>{state.adminPreviewMode='pattern';renderAdminPreview();});el('adminNextButton').addEventListener('click',()=>{nextArtwork();state.adminArtworkIndex=state.mode==='sand'?state.sandArtworkIndex:state.artworkIndex;updateAdminDashboard();renderAdminPreview();renderLibrary();});el('shuffleArtworkButton').addEventListener('click',()=>{if(state.mode==='sand'){sandArtworkQueue=createArtworkQueue(sandArtworks,state.sandArtworkIndex);sandQueueIndex=0;}else{diamondArtworkQueue=createArtworkQueue(artworks,state.artworkIndex);diamondQueueIndex=0;}updateAdminDashboard();renderLibrary();});el('restartArtworkButton').addEventListener('click',()=>{startArtworkCycle(state.mode,state.mode==='sand'?state.sandArtworkIndex:state.artworkIndex);});el('finishNowButton').addEventListener('click',finishNow);el('switchModeButton').addEventListener('click',startNextCycle);el('adminPauseButton').addEventListener('click',()=>{togglePause();el('adminPauseButton').textContent=state.paused?'Resume':'Pause';updateAdminDashboard();});el('artworkLibrary').addEventListener('click',event=>{const card=event.target.closest('.artwork-card');if(!card)return;state.adminArtworkIndex=Number(card.dataset.artworkIndex);state.adminPreviewMode='finished';renderAdminPreview(adminCollection()[state.adminArtworkIndex],true);renderLibrary();});
['pointermove','pointerdown','keydown'].forEach(name=>document.addEventListener(name,resetHudTimer));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&state.streamMode){state.streamMode=false;el('streamModeToggle').checked=false;document.body.classList.remove('stream-mode');}if(e.ctrlKey&&e.shiftKey&&e.key.toLowerCase()==='p'){e.preventDefault();state.adminMode?closeAdmin():openAdmin();}});
el('templatePreviewButton').addEventListener('click',()=>{const artwork=adminCollection()[state.adminArtworkIndex];if(artwork.category==='Animal')renderAnimalTemplate(artwork);else renderAdminPreview(artwork,false);});el('environmentPreviewButton').addEventListener('click',()=>{state.adminPreviewMode='finished';renderAdminPreview();});
/* Twitch bridge: viewers may ask about the sunrise or use !shake; state changes need moderation. */
function handleTwitchCommand(command,username='viewer',role='viewer'){const normalized=String(command).trim().toLowerCase().split(/\s+/)[0],activeArtwork=state.mode==='sand'?state.sandArtwork:state.artwork;if(normalized==='!shake'){triggerShake();return`${username} gave the tray a gentle shake.`;}if(normalized==='!progress')return`${activeArtwork.name}: ${el('progressText').textContent}`;if(normalized==='!art')return`${activeArtwork.name} - ${activeArtwork.description}`;if(normalized==='!color')return`Current diamond: ${el('currentColor').textContent}`;if(!['moderator','broadcaster','streamer'].includes(role))return'That command is reserved for the streamer or moderators.';if(normalized==='!pause'){togglePause();return state.paused?'Painting paused.':'Painting resumed.';}if(normalized==='!skip'){nextArtwork();return'Moving quietly to a new sunrise.';}return'Unknown studio command.';}
window.handleTwitchCommand=handleTwitchCommand;resizeCanvas();startArtworkCycle('diamond',0);