/**
 * Adobe Helium: symbol definitions
 */
window.symbols = {
"stage": {
   version: "0.1",
   baseState: "Base State",
   initialState: "Base State",
   parameters: {

   },
   content: {
      dom: [
        {
            id:'Rectangle1',
            type:'rect',
            rect:[26,34,502,321],
            fill:['rgba(192,192,192,1)'],
            stroke:[0,"rgba(0,0,0,1)","none"],
        },
      ],
      symbolInstances: [
      ],
   },
   states: {
      "Base State": {
         "#Rectangle1": [
            ["color", "background-color", 'rgba(192,192,192,1)']
         ],
         "#stage": [
            ["style", "height", '400px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px']
         ]
      }
   },
   actions: {

   },
   bindings: [

   ],
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         timeline: [
            { id: "eid2", tween: [ "color", "#Rectangle1", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 0, duration: 1000, easing: "linear" },
            { id: "eid3", tween: [ "color", "#Rectangle1", "background-color", 'rgba(36,255,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1)'}], position: 1000, duration: 1000, easing: "linear" },
            { id: "eid4", tween: [ "color", "#Rectangle1", "background-color", 'rgba(16,0,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(36,255,0,1)'}], position: 2000, duration: 1000, easing: "linear" }]
      }
   },
}};

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     $.Edge.initialize(symbols);
});
/**
 * Adobe Edge Timeline Launch
 */
$(window).load(function() {
    $.Edge.play();
});
