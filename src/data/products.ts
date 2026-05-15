export interface Product {
  id: number;
  name: string;
  detail: string;
  price: string;
  priceNum: number;
  image: string;
  description: string;
  fit: string;
  fabric: string;
  specs: string[];
  sizes: string[];
  color: string;
  number: string;
}

export const allProducts: Product[] = [
  { id:1, name:'Essential Hoodie', detail:'400gsm · Black', price:'€185', priceNum:185, image:'/images/product1.jpg',
    description:'Oversized heavyweight hoodie in garment-dyed black. 400gsm brushed cotton fleece with ribbed cuffs and hem. Relaxed drop-shoulder silhouette that falls below the hip.',
    fit:'Relaxed oversized. Drop shoulder. Falls 5cm below hip. Size up for extra volume, true to size for a structured oversized look.',
    fabric:'400gsm heavyweight brushed cotton fleece. Garment-dyed for depth of color. Enzyme washed for a lived-in softness from day one. Gets better with every wash.',
    specs:['400gsm Cotton Fleece','Garment-Dyed & Enzyme Washed','Relaxed Oversized Silhouette','Ribbed Cuffs & Hem','Kangaroo Pocket','Designed in Port Said'],
    sizes:['S','M','L','XL','XXL'], color:'Black', number:'001/200' },
  { id:2, name:'Washed Tee', detail:'Garment Dyed · Off-White', price:'€95', priceNum:95, image:'/images/product2.jpg',
    description:'Essential tee in enzyme-washed off-white. 280gsm heavyweight cotton with a lived-in feel from day one. No logos, no noise.',
    fit:'Relaxed fit. Slightly boxy cut. Sits at the hip. Runs true to size with room through the body.',
    fabric:'280gsm heavyweight cotton jersey. Enzyme washed for softness. Double-stitched seams throughout. Ribbed crewneck that holds shape.',
    specs:['280gsm Cotton Jersey','Enzyme Washed','Relaxed Boxy Cut','Double-Stitched Seams','Reinforced Collar','Designed in Port Said'],
    sizes:['S','M','L','XL','XXL'], color:'Off-White', number:'001/200' },
  { id:3, name:'Cargo Pant', detail:'Relaxed · Black', price:'€210', priceNum:210, image:'/images/product3.jpg',
    description:'Relaxed-fit cargo in washed black cotton twill. Minimal pocket design with matte black hardware. Elasticated waistband with internal drawcord.',
    fit:'Wide leg with a slight taper. Sits at natural waist. 32" inseam. Elastic waist with drawcord for adjustment.',
    fabric:'320gsm cotton twill. Washed for softness. Matte black YKK zippers and custom hardware. Internal drawcord waistband.',
    specs:['320gsm Cotton Twill','Matte Black Hardware','Wide Leg Silhouette','Elastic Waistband','Minimal Cargo Pockets','Designed in Port Said'],
    sizes:['S','M','L','XL','XXL'], color:'Black', number:'001/200' },
  { id:4, name:'Bomber Jacket', detail:'Water Resistant · Olive', price:'€340', priceNum:340, image:'/images/product4.jpg',
    description:'Technical bomber in matte olive. Water-resistant outer with brushed cotton lining. Custom ribbed collar, cuffs and hem. Clean silhouette.',
    fit:'Relaxed fit. Cropped at the hip. Room through the shoulders. Size down for a slimmer look.',
    fabric:'Water-resistant technical shell outer. Brushed cotton lining for warmth. Custom-milled rib knit at collar, cuffs and hem.',
    specs:['Water-Resistant Shell','Brushed Cotton Lining','Relaxed Cropped Fit','Custom Rib Knit Trim','YKK Zippers','Designed in Port Said'],
    sizes:['S','M','L','XL'], color:'Olive', number:'001/200' },
  { id:5, name:'Heavyweight Sweatpant', detail:'400gsm · Black', price:'€165', priceNum:165, image:'/images/product1.jpg',
    description:'Matching sweatpant to the Essential Hoodie. Same 400gsm heavyweight fleece. Relaxed tapered leg with ribbed ankle cuffs.',
    fit:'Relaxed taper. Sits at natural waist. Elastic waistband with drawcord. Tapers to ankle with ribbed cuffs.',
    fabric:'400gsm heavyweight brushed cotton fleece. Same construction as the Essential Hoodie. Garment-dyed. Enzyme washed.',
    specs:['400gsm Cotton Fleece','Garment-Dyed','Relaxed Taper','Ribbed Ankle Cuffs','Internal Drawcord','Designed in Port Said'],
    sizes:['S','M','L','XL','XXL'], color:'Black', number:'001/200' },
  { id:6, name:'Mock Neck', detail:'Ribbed · Charcoal', price:'€120', priceNum:120, image:'/images/product3.jpg',
    description:'Ribbed mock-neck in charcoal. Fine-gauge cotton knit with subtle texture. Slightly cropped length for layering.',
    fit:'Slim fit through the body. Slightly cropped — sits at the waistband. Mock neck sits close without choking.',
    fabric:'240gsm fine-gauge ribbed cotton. Tight knit for structure. Soft hand feel. Retains shape after washing.',
    specs:['240gsm Ribbed Cotton','Fine Gauge Knit','Slim Cropped Fit','Mock Neck','Designed in Port Said'],
    sizes:['S','M','L','XL'], color:'Charcoal', number:'001/200' },
  { id:7, name:'Canvas Cap', detail:'Washed · Black', price:'€55', priceNum:55, image:'/images/product2.jpg',
    description:'Six-panel cap in washed black canvas. Unstructured crown with subtle embossed LOWKEY mark on the back strap.',
    fit:'Unstructured. One size fits most. Adjustable back strap with embossed metal clasp.',
    fabric:'Washed cotton canvas. Unstructured crown that breaks in with wear. Tonal stitching throughout.',
    specs:['Washed Canvas','Unstructured Crown','Adjustable Strap','Embossed Hardware','Designed in Port Said'],
    sizes:['One Size'], color:'Black', number:'001/200' },
  { id:8, name:'Essential Shorts', detail:'400gsm · Black', price:'€125', priceNum:125, image:'/images/product4.jpg',
    description:'Cut from the same 400gsm heavyweight fleece. Relaxed fit hitting just above the knee. Elastic waistband, internal drawcord.',
    fit:'Relaxed fit. 7" inseam — hits just above the knee. Elastic waist with internal drawcord.',
    fabric:'400gsm heavyweight brushed cotton fleece. Same family as the Hoodie and Sweatpant. Garment-dyed, enzyme washed.',
    specs:['400gsm Cotton Fleece','Garment-Dyed','Above Knee Length','Elastic Waistband','Internal Drawcord','Designed in Port Said'],
    sizes:['S','M','L','XL','XXL'], color:'Black', number:'001/200' },
];

export const featuredProducts = allProducts.slice(0, 4);
