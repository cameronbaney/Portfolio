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
            rect:[44,16,71,71],
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
            ["transform", "translateX", '-3px'],
            ["transform", "translateY", '17px']
         ],
         "#stage": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '400px'],
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
         duration: 4000,
         timeline: [
            { id: "eid10", tween: [ "transform", "#Rectangle1", "translateX", '225px', { valueTemplate: undefined, fromValue: '-3px'}], position: 0, duration: 1000, easing: "linear" },
            { id: "eid3", tween: [ "transform", "#Rectangle1", "translateX", '370px', { valueTemplate: undefined, fromValue: '225px'}], position: 1000, duration: 1000, easing: "linear" },
            { id: "eid5", tween: [ "transform", "#Rectangle1", "translateX", '7px', { valueTemplate: undefined, fromValue: '370px'}], position: 2000, duration: 1000, easing: "linear" },
            { id: "eid7", tween: [ "transform", "#Rectangle1", "translateX", '376px', { valueTemplate: undefined, fromValue: '7px'}], position: 3000, duration: 1000, easing: "linear" },
            { id: "eid12", tween: [ "transform", "#Rectangle1", "translateY", '102px', { valueTemplate: undefined, fromValue: '17px'}], position: 0, duration: 1000, easing: "linear" },
            { id: "eid4", tween: [ "transform", "#Rectangle1", "translateY", '15px', { valueTemplate: undefined, fromValue: '102px'}], position: 1000, duration: 1000, easing: "linear" },
            { id: "eid6", tween: [ "transform", "#Rectangle1", "translateY", '254px', { valueTemplate: undefined, fromValue: '15px'}], position: 2000, duration: 1000, easing: "linear" },
            { id: "eid8", tween: [ "transform", "#Rectangle1", "translateY", '146px', { valueTemplate: undefined, fromValue: '254px'}], position: 3000, duration: 1000, easing: "linear" }]
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
