import {Fragment,useCallback,useContext,useEffect} from "react"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isTrue,refs} from "$/utils/state"
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


function Div_361b093f73e4ad81f31ad7a3f6dff056 () {
  const reflex___state____state__app___states___profile_state____profile_state = useContext(StateContexts.reflex___state____state__app___states___profile_state____profile_state)



  return (
    jsx("div",{className:"text-gray-800"},reflex___state____state__app___states___profile_state____profile_state.username_rx_state_)
  )
}


function Span_22e884c180456608b3916e827aa39660 () {
  const reflex___state____state__app___states___profile_state____profile_state = useContext(StateContexts.reflex___state____state__app___states___profile_state____profile_state)



  return (
    jsx("span",{className:(reflex___state____state__app___states___profile_state____profile_state.notifications_enabled_rx_state_ ? "translate-x-5 opacity-100 ease-in duration-200 h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition-transform" : "translate-x-0 opacity-100 ease-in duration-200 h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition-transform")},)
  )
}


function Button_35ece95140cf6da85788b875512c2a0d () {
  const reflex___state____state__app___states___profile_state____profile_state = useContext(StateContexts.reflex___state____state__app___states___profile_state____profile_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_26827f5cdfa4a7a4162a05176ca9c424 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___profile_state____profile_state.toggle_notifications", ({ ["value"] : !(reflex___state____state__app___states___profile_state____profile_state.notifications_enabled_rx_state_) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent, reflex___state____state__app___states___profile_state____profile_state])

  return (
    jsx("button",{className:(reflex___state____state__app___states___profile_state____profile_state.notifications_enabled_rx_state_ ? "bg-purple-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" : "bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"),onClick:on_click_26827f5cdfa4a7a4162a05176ca9c424},jsx(Span_22e884c180456608b3916e827aa39660,{},))
  )
}


function Span_2cfb5cad2528fced00dc69e86d86bf6a () {
  const reflex___state____state__app___states___profile_state____profile_state = useContext(StateContexts.reflex___state____state__app___states___profile_state____profile_state)



  return (
    jsx("span",{className:(reflex___state____state__app___states___profile_state____profile_state.data_analysis_consent_rx_state_ ? "translate-x-5 opacity-100 ease-in duration-200 h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition-transform" : "translate-x-0 opacity-100 ease-in duration-200 h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition-transform")},)
  )
}


function Button_a963059520385a56ef1c56bfea826983 () {
  const reflex___state____state__app___states___profile_state____profile_state = useContext(StateContexts.reflex___state____state__app___states___profile_state____profile_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9c07b35dce62debb91e84a623357699b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___profile_state____profile_state.toggle_data_analysis", ({ ["value"] : !(reflex___state____state__app___states___profile_state____profile_state.data_analysis_consent_rx_state_) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent, reflex___state____state__app___states___profile_state____profile_state])

  return (
    jsx("button",{className:(reflex___state____state__app___states___profile_state____profile_state.data_analysis_consent_rx_state_ ? "bg-purple-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" : "bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"),onClick:on_click_9c07b35dce62debb91e84a623357699b},jsx(Span_2cfb5cad2528fced00dc69e86d86bf6a,{},))
  )
}


function Button_815577f1078fa810dfebc8dcacff57b9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_e8bcf066175d672e7ed2ae007d760283 = useCallback(((_e) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => (refs['__toast']?.["error"]("Account deletion is not yet implemented."))), ["callback"] : null }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"w-full text-left px-4 py-3 font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors",onClick:on_click_e8bcf066175d672e7ed2ae007d760283},"Delete Account")
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


function Fragment_756df53a6c7a8594b7c3c7929ed42aa1 () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx(Fragment,{},(reflex___state____state__app___states___auth_state____auth_state.is_authenticated_rx_state_?(jsx(Fragment,{},jsx("div",{className:"min-h-screen bg-gray-50 flex flex-col font-['Inter']"},jsx("header",{className:"py-4 px-6 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"},jsx("div",{className:"container mx-auto flex justify-between items-center"},jsx(ReactRouterLink,{to:"/"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideSmilePlus,{className:"h-8 w-8 text-purple-600"},),jsx("span",{className:"text-xl font-bold text-gray-800"},"MoodBite"))),jsx(Fragment_3470c765583f95e8ec81bb039d245afc,{},))),jsx("main",{},jsx("div",{className:"container mx-auto py-8 px-6 max-w-3xl"},jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8"},"Profile & Settings"),jsx("div",{},jsx("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm"},jsx("h2",{className:"text-xl font-semibold text-gray-800 px-4 pb-2 border-b border-gray-200"},"Account Information"),jsx("div",{className:"flex justify-between items-center p-4"},jsx("div",{className:"font-medium text-gray-600"},"Email"),jsx(Div_361b093f73e4ad81f31ad7a3f6dff056,{},))),jsx("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm mt-8"},jsx("h2",{className:"text-xl font-semibold text-gray-800 px-4 pt-4 pb-2"},"Privacy & Consent"),jsx("div",{className:"flex items-center justify-between p-4 border-b border-gray-200"},jsx("div",{className:"flex-grow"},jsx("label",{className:"font-semibold text-gray-800"},"Email Notifications"),jsx("p",{className:"text-sm text-gray-500"},"Receive updates and summaries via email.")),jsx("div",{},jsx(Button_35ece95140cf6da85788b875512c2a0d,{},))),jsx("div",{className:"flex items-center justify-between p-4 border-b border-gray-200"},jsx("div",{className:"flex-grow"},jsx("label",{className:"font-semibold text-gray-800"},"AI Data Analysis"),jsx("p",{className:"text-sm text-gray-500"},"Allow our AI to analyze your data for personalized insights.")),jsx("div",{},jsx(Button_a963059520385a56ef1c56bfea826983,{},)))),jsx("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm mt-8"},jsx(Button_815577f1078fa810dfebc8dcacff57b9,{},)))))))):(jsx(Fragment,{},jsx(Div_f1436fc101b770a2b738f5c1136ca033,{},)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Fragment_756df53a6c7a8594b7c3c7929ed42aa1,{},),jsx("title",{},"App | Profile"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}