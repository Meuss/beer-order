# beer-order

## How to install locally

Installed node version: 14.15.1 (LTS)

```
git clone
npm install
npm run dev
```

It then runs at localhost:8080

## Tools + libraries used

- [Vue.js](https://vuex.vuejs.org/)
- [Vuex](https://vuejs.org/)
- [vue-slider-component](https://www.npmjs.com/package/vue-slider-component)
- [Greensock](https://greensock.com/) for animations
- Sketch to edit svgs

## Feedback & Thoughts

I spent more than 4 hours on the project (took me about 6 or 7 I would say), but it was fun to build so I enjoyed it.

The hardest part was the bubbles and waves animation I would say. I started off trying to use svg morphing (using gsap's morphsvg tool) - but that didn't work out so I simply used a scale animation.

The bubbles were also took some time to build, I should have managed them differently but at least they work, almost bug free.

What I could do better: finish tweaking the animations (foam, bubbles and waves) a bit better and smoother, but I think that for this prototype it is enough.

Possible improvements: I could imagine have the button amount be editable, and changes would directly be linked to the store (vuex state). I would also build this prototype to be responsive of course.

I hadn't worked with vue and gsap animations in a while, very fun stuff!
