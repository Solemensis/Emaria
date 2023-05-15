# Fully functional general e-commerce website
- Working demo: https://emaria.vercel.app/ 


## Techs used: Vue3, Nuxt3, Pinia, Supabase, Sanity, Formkit, VueUse, Aos.
- [Vue3 & Nuxt3] as building blocks.
- [Pinia] to maintain cart state on client side, to share fetched products & some globally needed boolean values across components.
- [Supabase] to save cart/user data, and to build auth.
- [sanity] as a headless cms to build and maintain products-api by using a user-friendly gui which sanity provides us.
- [Formkit] to build easily maintainable forms.
- [VueUse-IntersectionObserver] to implement infinite scroll.
- [Aos] to build scroll reveal animations.
- [Prisma] to manage database with ease.

## The Sanity Headless Cms:

- Products api can be maintained with a no-code, user-friendly headless frustructure by the shop owner. A view from the ui of the Sanity CMS:
<img src="https://wjfywtvnvjbposklgxzj.supabase.co/storage/v1/object/public/readme/sanityui.jpg" alt="UI of the Sanity" width="600">


## Shop UI:
<img src="https://wjfywtvnvjbposklgxzj.supabase.co/storage/v1/object/public/readme/shop.jpg" alt="UI of the Shop" width="600">

- After choosing an item from shop, page will lead the user to that item's page:

<img src="https://wjfywtvnvjbposklgxzj.supabase.co/storage/v1/object/public/readme/product.jpg" alt="UI of the Product" width="600">

- If the user is logged in and wants to add an item to the cart, it will be added to his/her cart, and all of this will be happening in an SQL database.
- The cart UI can be seen at the bottom:

<img src="https://wjfywtvnvjbposklgxzj.supabase.co/storage/v1/object/public/readme/cart.jpg" alt="UI of the Cart" width="600">



## What would i do next?
- I would handle buyouts with Stripe api or using similar on Nuxt server routes if it was a real world e-commerce.
- Could make "add to fav" button functional.
