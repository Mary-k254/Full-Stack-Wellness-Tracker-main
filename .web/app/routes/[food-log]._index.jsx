import {Fragment,useCallback,useContext,useEffect} from "react"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isTrue} from "$/utils/state"
import {Link as ReactRouterLink} from "react-router"
import {SmilePlus as LucideSmilePlus} from "lucide-react"
import {jsx} from "@emotion/react"




function Button_e71ac9e0dcf5433292a3482b086f5532 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f1f26d3213ef405e40660aa85aba8c1b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___auth_state____auth_state.logout", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"ml-4 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors",onClick:on_click_f1f26d3213ef405e40660aa85aba8c1b},"Log Out")
  )
}


function Fragment_3470c765583f95e8ec81bb039d245afc () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx(Fragment,{},(reflex___state____state__app___states___auth_state____auth_state.is_authenticated_rx_state_?(jsx(Fragment,{},jsx("div",{className:"hidden md:flex items-center gap-6"},jsx(ReactRouterLink,{className:"text-gray-600 hover:text-purple-600 font-medium transition-colors",to:"/dashboard"},"Dashboard"),jsx(ReactRouterLink,{className:"text-gray-600 hover:text-purple-600 font-medium transition-colors",to:"/mood-tracker"},"Mood Tracker"),jsx(ReactRouterLink,{className:"text-gray-600 hover:text-purple-600 font-medium transition-colors",to:"/journal"},"Journal"),jsx(ReactRouterLink,{className:"text-gray-600 hover:text-purple-600 font-medium transition-colors",to:"/food-log"},"Food Log"),jsx(ReactRouterLink,{className:"text-gray-600 hover:text-purple-600 font-medium transition-colors",to:"/profile"},"Profile"),jsx(Button_e71ac9e0dcf5433292a3482b086f5532,{},)))):(jsx(Fragment,{},))))
  )
}


function Select_f298a60695ab450dbbcc83dcf6271fdf () {
  const reflex___state____state__app___states___food_state____food_state = useContext(StateContexts.reflex___state____state__app___states___food_state____food_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_722d08899ab2ae30ed2ebcc27a11e91a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___food_state____food_state.set_manual_food_selection", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("select",{className:"w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all",onChange:on_change_722d08899ab2ae30ed2ebcc27a11e91a,value:reflex___state____state__app___states___food_state____food_state.manual_food_selection_rx_state_},jsx("option",{disabled:true,value:""},"Select a food..."),Array.prototype.map.call(reflex___state____state__app___states___food_state____food_state.food_db_options_rx_state_ ?? [],((food_rx_state_,index_ddd253a4041ada74ef0c1f41d919cf37)=>(jsx("option",{key:index_ddd253a4041ada74ef0c1f41d919cf37,value:food_rx_state_},(((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())(food_rx_state_)))))))
  )
}


function Button_1c78ffe3ba380fd169aceddfc90076a3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_226fefe41f913204d4b9d260520cc451 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___food_state____food_state.add_food_manual", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"w-full mt-4 py-3 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 transition-all",onClick:on_click_226fefe41f913204d4b9d260520cc451},"Add Food")
  )
}


function Textarea_44d71be60c372bb69dfbd14027ea2448 () {
  const reflex___state____state__app___states___food_state____food_state = useContext(StateContexts.reflex___state____state__app___states___food_state____food_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_38384ebc555cd8115b526231c92c6d4d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___food_state____food_state.set_free_text_input", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("textarea",{className:"w-full h-24 p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none",defaultValue:reflex___state____state__app___states___food_state____food_state.free_text_input_rx_state_,onChange:on_change_38384ebc555cd8115b526231c92c6d4d,placeholder:"e.g., I had ugali with sukuma wiki and beef for lunch."},)
  )
}


function Button_0ca9dcab9e0bda517e2fee538a0c0e52 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_63de7f9fe40889b53f9809318bb7637a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___food_state____food_state.preview_extracted_foods", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"w-full mt-4 py-2 text-purple-700 font-semibold rounded-lg bg-purple-100 hover:bg-purple-200 transition-all",onClick:on_click_63de7f9fe40889b53f9809318bb7637a},"Preview Foods")
  )
}


function Div_699d6b6d4bd6c7041abd3d08cbc8b16c () {
  const reflex___state____state__app___states___food_state____food_state = useContext(StateContexts.reflex___state____state__app___states___food_state____food_state)



  return (
    jsx("div",{className:"flex flex-wrap gap-2"},Array.prototype.map.call(reflex___state____state__app___states___food_state____food_state.extracted_foods_preview_rx_state_ ?? [],((food_rx_state_,index_1bcf946cb28d0a5ee2415f983e32b058)=>(jsx("span",{className:"px-3 py-1 text-sm font-medium text-white bg-purple-500 rounded-full",key:index_1bcf946cb28d0a5ee2415f983e32b058},(((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())(food_rx_state_)))))))
  )
}


function Button_a44323efdb2503750d42e4f09037cee8 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_d164e980d01ef5906a448393b32f9b81 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___food_state____food_state.add_extracted_foods", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"w-full mt-4 py-3 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 transition-all",onClick:on_click_d164e980d01ef5906a448393b32f9b81},"Add Detected Foods")
  )
}


function Fragment_dad2688f897bc762ee1ed3ace0dc7ea1 () {
  const reflex___state____state__app___states___food_state____food_state = useContext(StateContexts.reflex___state____state__app___states___food_state____food_state)



  return (
    jsx(Fragment,{},((reflex___state____state__app___states___food_state____food_state.extracted_foods_preview_rx_state_.length > 0)?(jsx(Fragment,{},jsx("div",{className:"mt-4"},jsx("p",{className:"text-sm font-medium text-gray-700 mt-4 mb-2"},"Detected foods:"),jsx(Div_699d6b6d4bd6c7041abd3d08cbc8b16c,{},),jsx(Button_a44323efdb2503750d42e4f09037cee8,{},)))):(jsx(Fragment,{},))))
  )
}


function Div_802f3d37dcff0d6f330ba5e37f5d2db0 () {
  const reflex___state____state__app___states___food_state____food_state = useContext(StateContexts.reflex___state____state__app___states___food_state____food_state)



  return (
    jsx("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm"},Array.prototype.map.call(reflex___state____state__app___states___food_state____food_state.food_log_entries_rx_state_ ?? [],((entry_rx_state_,index_e15d625b841acde0910975c07db24436)=>(jsx("div",{className:"flex justify-between items-center p-4 border-b border-gray-200",key:index_e15d625b841acde0910975c07db24436},jsx("div",{},jsx("p",{className:"font-semibold text-gray-800"},(((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())(entry_rx_state_?.["food_name"]))),jsx("span",{className:(() => { switch (JSON.stringify(entry_rx_state_?.["category"])) {case JSON.stringify("african"):  return ("px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full");  break;case JSON.stringify("grains"):  return ("px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full");  break;case JSON.stringify("proteins"):  return ("px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full");  break;case JSON.stringify("dairy"):  return ("px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full");  break;case JSON.stringify("vegetables"):  return ("px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full");  break;case JSON.stringify("fruits"):  return ("px-2 py-1 text-xs font-medium text-orange-700 bg-orange-100 rounded-full");  break;case JSON.stringify("beverages"):  return ("px-2 py-1 text-xs font-medium text-cyan-700 bg-cyan-100 rounded-full");  break;case JSON.stringify("snacks"):  return ("px-2 py-1 text-xs font-medium text-pink-700 bg-pink-100 rounded-full");  break;default:  return ("px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full");  break;};})()},(((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())(entry_rx_state_?.["category"])))),jsx("div",{className:"flex gap-2 items-center"},jsx("p",{className:"text-sm text-gray-500"},entry_rx_state_?.["date"]),jsx("p",{className:"text-sm text-gray-500"},entry_rx_state_?.["timestamp"])))))))
  )
}


function Fragment_cf25bfc028882d5332866d5318acd080 () {
  const reflex___state____state__app___states___food_state____food_state = useContext(StateContexts.reflex___state____state__app___states___food_state____food_state)



  return (
    jsx(Fragment,{},((reflex___state____state__app___states___food_state____food_state.food_log_entries_rx_state_.length > 0)?(jsx(Fragment,{},jsx(Div_802f3d37dcff0d6f330ba5e37f5d2db0,{},))):(jsx(Fragment,{},jsx("p",{className:"text-gray-500"},"No food logged yet. Add your first meal above!")))))
  )
}


function Div_f1436fc101b770a2b738f5c1136ca033 () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("_redirect", ({ ["path"] : "/", ["external"] : false, ["popup"] : false, ["replace"] : false }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx("div",{},)
  )
}


function Fragment_ce3d8276d309aa4a4140a7a3f21ef3c6 () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx(Fragment,{},(reflex___state____state__app___states___auth_state____auth_state.is_authenticated_rx_state_?(jsx(Fragment,{},jsx("div",{className:"min-h-screen bg-gray-50 flex flex-col font-['Inter']"},jsx("header",{className:"py-4 px-6 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"},jsx("div",{className:"container mx-auto flex justify-between items-center"},jsx(ReactRouterLink,{to:"/"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideSmilePlus,{className:"h-8 w-8 text-purple-600"},),jsx("span",{className:"text-xl font-bold text-gray-800"},"MoodBite"))),jsx(Fragment_3470c765583f95e8ec81bb039d245afc,{},))),jsx("main",{className:"flex-grow"},jsx("div",{className:"container mx-auto py-8 px-6 max-w-4xl"},jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8"},"Food Log"),jsx("div",{className:"grid md:grid-cols-2 gap-8"},jsx("div",{className:"p-6 bg-white rounded-xl border border-gray-200 shadow-sm"},jsx("h3",{className:"text-lg font-semibold text-gray-800"},"Quick Add"),jsx("p",{className:"text-sm text-gray-500 mb-4"},"Select a food item from the database."),jsx(Select_f298a60695ab450dbbcc83dcf6271fdf,{},),jsx(Button_1c78ffe3ba380fd169aceddfc90076a3,{},)),jsx("div",{className:"p-6 bg-white rounded-xl border border-gray-200 shadow-sm"},jsx("h3",{className:"text-lg font-semibold text-gray-800"},"Free Text Entry"),jsx("p",{className:"text-sm text-gray-500 mb-4"},"Describe your meal, and we'll find the food items."),jsx(Textarea_44d71be60c372bb69dfbd14027ea2448,{},),jsx(Button_0ca9dcab9e0bda517e2fee538a0c0e52,{},),jsx(Fragment_dad2688f897bc762ee1ed3ace0dc7ea1,{},))),jsx("div",{},jsx("h2",{className:"text-2xl font-bold text-gray-900 mt-12 mb-4"},"Food Log History"),jsx(Fragment_cf25bfc028882d5332866d5318acd080,{},))))))):(jsx(Fragment,{},jsx(Div_f1436fc101b770a2b738f5c1136ca033,{},)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Fragment_ce3d8276d309aa4a4140a7a3f21ef3c6,{},),jsx("title",{},"App | Food-Log"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}