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


function Textarea_503bb3307e0af2f9f7ec2dfa0d5b9bc5 () {
  const reflex___state____state__app___states___journal_state____journal_state = useContext(StateContexts.reflex___state____state__app___states___journal_state____journal_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_5d8de3a7fa96f238ba950539e75e61cb = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___journal_state____journal_state.set_current_journal_text", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("textarea",{className:"w-full h-48 p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none",defaultValue:reflex___state____state__app___states___journal_state____journal_state.current_journal_text_rx_state_,maxLength:500,onChange:on_change_5d8de3a7fa96f238ba950539e75e61cb,placeholder:"How was your day?"},)
  )
}


function Span_1db58953ee848df47205b8428690d7f9 () {
  const reflex___state____state__app___states___journal_state____journal_state = useContext(StateContexts.reflex___state____state__app___states___journal_state____journal_state)



  return (
    jsx("span",{},reflex___state____state__app___states___journal_state____journal_state.sentiment_analysis_rx_state_?.["emoji"])
  )
}


function Span_15c7639a954b85361ddd48e43b2fc85f () {
  const reflex___state____state__app___states___journal_state____journal_state = useContext(StateContexts.reflex___state____state__app___states___journal_state____journal_state)



  return (
    jsx("span",{className:"font-medium"},(((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())(reflex___state____state__app___states___journal_state____journal_state.sentiment_analysis_rx_state_?.["label"])))
  )
}


function Span_134839a8b1682d30e97c0f8895705631 () {
  const reflex___state____state__app___states___journal_state____journal_state = useContext(StateContexts.reflex___state____state__app___states___journal_state____journal_state)



  return (
    jsx("span",{},("("+(JSON.stringify(reflex___state____state__app___states___journal_state____journal_state.sentiment_analysis_rx_state_?.["polarity"]))+")"))
  )
}


function P_e086d9976c10f3c70c2fe856de03ee0f () {
  const reflex___state____state__app___states___journal_state____journal_state = useContext(StateContexts.reflex___state____state__app___states___journal_state____journal_state)



  return (
    jsx("p",{className:"text-sm text-gray-500"},(reflex___state____state__app___states___journal_state____journal_state.current_journal_text_rx_state_.split("").length+"/500"))
  )
}


function Button_f840f8581168e131909d6ecd4736da1d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_86f16786509133fa5e980e17d42862b6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___journal_state____journal_state.save_journal_entry", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"w-full mt-4 py-3 px-4 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all",onClick:on_click_86f16786509133fa5e980e17d42862b6},"Save Entry")
  )
}


function Div_09cd0bb079e466018da324a2da7b3342 () {
  const reflex___state____state__app___states___journal_state____journal_state = useContext(StateContexts.reflex___state____state__app___states___journal_state____journal_state)



  return (
    jsx("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm"},Array.prototype.map.call(reflex___state____state__app___states___journal_state____journal_state.journal_entries_rx_state_ ?? [],((entry_rx_state_,index_5580cafefe739b438cf950893ba6f056)=>(jsx("details",{className:"p-4 border-b border-gray-200",key:index_5580cafefe739b438cf950893ba6f056},jsx("summary",{className:"flex items-center w-full cursor-pointer"},jsx("div",{},jsx("p",{className:"font-semibold text-gray-800"},entry_rx_state_?.["date"]),jsx("p",{className:"text-sm text-gray-500"},entry_rx_state_?.["timestamp"]),jsx("span",{className:(() => { switch (JSON.stringify(entry_rx_state_?.["sentiment_label"])) {case JSON.stringify("POSITIVE"):  return ("ml-auto px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full");  break;case JSON.stringify("NEGATIVE"):  return ("ml-auto px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full");  break;case JSON.stringify("NEUTRAL"):  return ("ml-auto px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full");  break;default:  return ("px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full");  break;};})()},entry_rx_state_?.["sentiment_label"]))),jsx("p",{className:"mt-4 text-gray-700 leading-relaxed whitespace-pre-wrap"},entry_rx_state_?.["text"]))))))
  )
}


function Fragment_93ab118e6b8510b2824820ccdaedb4fd () {
  const reflex___state____state__app___states___journal_state____journal_state = useContext(StateContexts.reflex___state____state__app___states___journal_state____journal_state)



  return (
    jsx(Fragment,{},((reflex___state____state__app___states___journal_state____journal_state.journal_entries_rx_state_.length > 0)?(jsx(Fragment,{},jsx(Div_09cd0bb079e466018da324a2da7b3342,{},))):(jsx(Fragment,{},jsx("p",{className:"text-gray-500"},"No journal entries yet. Write your first one above!")))))
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


function Fragment_3d027b7c9468d84d91fd04855bd11a05 () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx(Fragment,{},(reflex___state____state__app___states___auth_state____auth_state.is_authenticated_rx_state_?(jsx(Fragment,{},jsx("div",{className:"min-h-screen bg-gray-50 flex flex-col font-['Inter']"},jsx("header",{className:"py-4 px-6 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"},jsx("div",{className:"container mx-auto flex justify-between items-center"},jsx(ReactRouterLink,{to:"/"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideSmilePlus,{className:"h-8 w-8 text-purple-600"},),jsx("span",{className:"text-xl font-bold text-gray-800"},"MoodBite"))),jsx(Fragment_3470c765583f95e8ec81bb039d245afc,{},))),jsx("main",{},jsx("div",{className:"container mx-auto py-8 px-6 max-w-3xl"},jsx("div",{className:"bg-white p-8 rounded-xl border border-gray-200 shadow-sm"},jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4"},"Daily Journal"),jsx("div",{className:"relative"},jsx(Textarea_503bb3307e0af2f9f7ec2dfa0d5b9bc5,{},),jsx("div",{className:"flex justify-between items-center mt-2"},jsx("div",{className:"flex items-center gap-2 text-sm text-gray-600"},jsx(Span_1db58953ee848df47205b8428690d7f9,{},),jsx(Span_15c7639a954b85361ddd48e43b2fc85f,{},),jsx(Span_134839a8b1682d30e97c0f8895705631,{},)),jsx(P_e086d9976c10f3c70c2fe856de03ee0f,{},))),jsx(Button_f840f8581168e131909d6ecd4736da1d,{},)),jsx("div",{},jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4 mt-12"},"Past Entries"),jsx(Fragment_93ab118e6b8510b2824820ccdaedb4fd,{},))))))):(jsx(Fragment,{},jsx(Div_f1436fc101b770a2b738f5c1136ca033,{},)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Fragment_3d027b7c9468d84d91fd04855bd11a05,{},),jsx("title",{},"App | Journal"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}