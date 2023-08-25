// console.clear()
const amp = 12
const nPts = 23
const pts = []
for (let i=0; i<=nPts; i++) pts.push({ x:Math.round(i/nPts*400), y:100 }) //fill array with points

gsap.to(pts, {duration:1, y:(i)=>100+amp, ease:'sine.inOut', stagger:{amount:-2, repeat:-1, yoyo:true}, onUpdate:applyPath}).seek(100)

function applyPath(){ //convert points to path data and apply to the path element
  let data = 'M'
  for (let i=0; i<pts.length; i++) data+= pts[i].x + ',' + pts[i].y + ' '
  gsap.set('path', {attr:{ d:data }})
}

gsap.to('path', {attr:{'stroke-dashoffset':-24}, ease:'none', repeat:-1, duration:1})
gsap.fromTo('path', {y:14},{y:-22, ease:'sine.inOut', yoyo:true, repeat:-1, duration:3.3})