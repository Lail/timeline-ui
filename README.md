I had a lot of fun with this! I've build calendars, but this was my first timeline UI.

---

__How long you spent on the assignment__

Almost the whole 5 hours.

---

__What you like about your implementation__

The UI is minimal and functional, and I like that well enough. It's all fairly responsive, despite an (over?) reliance on quite a bit of absolute positioning to px.

The code is clean and (I believe) easy to follow. The zoom and movement both worked with what I believe are nice, simple solutions, and the reducer implementations are very clean – I didn't have to spend too much time getting either to work.

---

__What you would change if you were going to do it again__

A few things.

1) I'm not entirely happy with the sortItems() function that is doing the heavy lifting sorting the lanes yet. I think it's likely performant through a few thousand events right now, and in "real life" I'd make sure it didn't need to handle more data than that before shipping it. Also not crazy about the reliance on the .sort(), both bc that can be slow, and bc it's non-deterministic in some environments, and I can imagine an API where I was refetching to grab more data as the user pans around, and I wouldn't want things shifting around on them.

Also not sure if the recursive call was the best option here. A for... loop would have possibly been a little more code but might have been a little more performant and easier to follow.

2) I wanted to add subtle vertical week & day markers behind the events, and ran out of time :/

3) Not entirely happy with the visual design. I don't love the event bars w/ the titles inside. They get cut off too easily. In real life I would have spent some design-time up front in Sketch coming up with a visual solution I liked a little better before I started coding, but in this case I was moving fast and designing on the fly as I wrote the code, and that element of the design worked better in my head than when it landed on the page.

Maybe there is a solution that moves the titles underneath the time bars and then does the lane sorting on the fly, rendering the Events in a loop and taking the previously rendered events width including the rendered text width into consideration? Given more time I would have time-boxed myself an hour or two and mocked it up and messed with it.

4) Not sure I would have committed to the StringyDates (lol, bad name) class that I came up with. Thought it would speed things up and make some cleaner code. Not sure it did.

5) If sortItems was actually loading from an API, I would have probably moved that into an Effect Hook so it kicked off after the initial render. Would have added a visual loading state, etc. - but all of that seemed out of scope for the moment.

6) Drag and drop would be really nice here, and I can imagine how I might approach it, but I think I would likely require a couple more hours.
---

__How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.__

I didn't look at anything, though I wish I had – given more time I would have started off looking for other UIs that were tackling the problem.

Then I would have mocked it up in Sketch or Figma and got a solution I liked before starting in on the code.

I also would have liked to add some animation to the event traversal, but I'd want to make sure it's performant given a few hundred events. I've liked "pose" as an nice animation library lately, but I hear "spring" is worth checking out as well. I ended up forgoing it given the timeframe, but I do find the back/forward and even zoom a little jarring.

---

__How you would test this if you had more time.__

For the most part, the components are all clean enough to test easily in a shllow renders using Jest+Enzyme. I prefer to just test the actual rendered DOM output given some test data, rather than try to dig into the internals of any given component.

The App component itself is questionable. I _might_ pull the very simple scale algo out into a testable function outside the component, but otherwise Id just do a full mount and check the DOM to make sure it's rendering its children, but otherwise rely on the shallow tests of each of those individual children.

In this case the Timeline component would be the trickiest because I would want to test the positions of some rendered events. The critical positioning you'd want to test is already set as a style string on each DOM element, so I suppose pulling that off and parsing it back to values would be easy enough, if not quite elegant.

The reducers would be easy to test alone in Jest, as would StringyDates and sortItems. That would cover everything pretty well, in my opinion, but I'd love to learn how you'd do it. Different teams have different degrees of "Move fast and break things" :)

---

I know that looks like a long list of things I would have liked to have done but didn't, but all said I'm pretty happy with what I came up with given the limited time. I had enough fun that I might continue with it later. I hope you like what I managed to come up with, and I'd be happy to answer any questions lail@nextplex.com

- LB
