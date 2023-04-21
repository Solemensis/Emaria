# Fully functional general e-commerce website
- Working demo: https://emaria.vercel.app/ 

## Some footages

<img src="https://wjfywtvnvjbposklgxzj.supabase.co/storage/v1/object/public/readme/shop.jpg" alt="UI of the Shop" width="600">
- Shop UI can be seen on top picture. After choosing an item, page will leed the user to that item's page:
- 
<img src="https://wjfywtvnvjbposklgxzj.supabase.co/storage/v1/object/public/readme/product.jpg" alt="UI of the Product" width="600">
- And, if user is logged and wants to add the item to the card, it'll be added to his/her cart and all this will be happening on an sql database.
- Cart UI can be seen on bottom:
- 
<img src="https://wjfywtvnvjbposklgxzj.supabase.co/storage/v1/object/public/readme/cart.jpg" alt="UI of the Cart" width="600">

## Techs used: Vue3, Nuxt3, Pinia, Supabase, directus, Formkit, VueUse, Aos.
- [Vue3 & Nuxt3] as building blocks.
- [Pinia] to maintain cart state on client side, to share fetched products & some globally needed boolean values across components.
- [Supabase] to save cart/user data, and to build auth.
- [directus] as a headless cms to build and maintain products-api by using a gui which directus provides us.
- [Formkit] to build easily maintainable forms.
- [VueUse-IntersectionObserver] to implement infinite scroll.
- [Aos] to build scroll reveal animations.

## What would i do next?
- I would handle buyouts with Stripe api or using similar on Nuxt server routes if it was a real world e-commerce.
- Could make "add to fav" button functional.
