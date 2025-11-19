import {Fragment,lazy,useCallback,useContext,useEffect} from "react"
import {ClientSide,EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isTrue} from "$/utils/state"
import {Link as ReactRouterLink} from "react-router"
import {SmilePlus as LucideSmilePlus} from "lucide-react"
import {CartesianGrid as RechartsCartesianGrid,Line as RechartsLine,ResponsiveContainer as RechartsResponsiveContainer,Tooltip as RechartsTooltip,XAxis as RechartsXAxis,YAxis as RechartsYAxis} from "recharts"
import {jsx} from "@emotion/react"

const RechartsLineChart = ClientSide(lazy(() => import('recharts').then((mod) => ({default: mod.LineChart}))))


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


function Label_c97ea3ea438f95f39c0977da3e024733 () {
  const reflex___state____state__app___states___mood_state____mood_state = useContext(StateContexts.reflex___state____state__app___states___mood_state____mood_state)



  return (
    jsx("label",{className:"text-lg font-medium text-gray-700 mb-4"},("How are you feeling? "+reflex___state____state__app___states___mood_state____mood_state.current_mood_score_rx_state_+"/10"))
  )
}


function Input_c1d1257580434efd47460449b7155226 () {
  const reflex___state____state__app___states___mood_state____mood_state = useContext(StateContexts.reflex___state____state__app___states___mood_state____mood_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2653710e5e938844b5490db588839de9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___mood_state____mood_state.set_current_mood_score", ({ ["value"] : (Number(_e?.["target"]?.["value"])) }), ({ ["throttle"] : 100 })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600",defaultValue:(JSON.stringify(reflex___state____state__app___states___mood_state____mood_state.current_mood_score_rx_state_)),key:(JSON.stringify(reflex___state____state__app___states___mood_state____mood_state.current_mood_score_rx_state_)),max:10,min:0,onChange:on_change_2653710e5e938844b5490db588839de9,type:"range"},)
  )
}


function Div_0cd6bbb75fc4e2685310f49ea879ce61 () {
  const reflex___state____state__app___states___mood_state____mood_state = useContext(StateContexts.reflex___state____state__app___states___mood_state____mood_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx("div",{className:"flex flex-wrap gap-2"},Array.prototype.map.call(reflex___state____state__app___states___mood_state____mood_state.available_tags_rx_state_ ?? [],((tag_rx_state_,index_d2df000f8917a13e6f014e00a0b35d52)=>(jsx("button",{className:(reflex___state____state__app___states___mood_state____mood_state.selected_tags_rx_state_.includes(tag_rx_state_) ? "px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-full shadow-sm hover:bg-purple-700 transition-all" : "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-all"),key:index_d2df000f8917a13e6f014e00a0b35d52,onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___mood_state____mood_state.toggle_tag", ({ ["tag"] : tag_rx_state_ }), ({  })))], [_e], ({  }))))},(((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())(tag_rx_state_)))))))
  )
}


function Button_900effec0ec0ee237917ca7a90bc10d0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_419674d76a2fa10c2a307da525a4ec7a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___mood_state____mood_state.log_mood", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"w-full mt-6 py-3 px-4 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center",onClick:on_click_419674d76a2fa10c2a307da525a4ec7a},"Log Mood")
  )
}


function Responsivecontainer_d4ec6ab5a1a5bcd55aa7de2e8ec9a47b () {
  const reflex___state____state__app___states___mood_state____mood_state = useContext(StateContexts.reflex___state____state__app___states___mood_state____mood_state)



  return (
    jsx(RechartsResponsiveContainer,{height:300,minHeight:10,minWidth:10,width:"100%"},jsx(RechartsLineChart,{className:"w-full",data:reflex___state____state__app___states___mood_state____mood_state.mood_history_last_7_days_rx_state_,height:"100%",width:"100%"},jsx(RechartsCartesianGrid,{stroke:"var(--gray-7)",strokeDasharray:"3 3"},),jsx(RechartsTooltip,{contentStyle:({ ["background"] : "var(--gray-1)", ["borderColor"] : "var(--gray-4)", ["borderRadius"] : "8px" }),cursor:({ ["fill"] : "rgba(200, 200, 200, 0.2)" }),itemStyle:({ ["color"] : "var(--gray-12)" }),labelStyle:({ ["color"] : "var(--gray-11)" })},),jsx(RechartsXAxis,{dataKey:"date",stroke:"var(--gray-9)"},),jsx(RechartsYAxis,{domain:[0, 10],stroke:"var(--gray-9)"},),jsx(RechartsLine,{activeDot:({ ["r"] : 8 }),dataKey:"mood_score",dot:({ ["stroke"] : "var(--accent-10)", ["fill"] : "var(--accent-4)" }),stroke:"#8884d8",type:"monotone"},)))
  )
}


function Div_565950ea565ed6ab3922fdd73c49d6e8 () {
  const reflex___state____state__app___states___mood_state____mood_state = useContext(StateContexts.reflex___state____state__app___states___mood_state____mood_state)



  return (
    jsx("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm"},Array.prototype.map.call(reflex___state____state__app___states___mood_state____mood_state.mood_entries_rx_state_ ?? [],((entry_rx_state_,index_27364826017e828e086ae96111b08d98)=>(jsx("div",{className:"p-4 border-b border-gray-200",key:index_27364826017e828e086ae96111b08d98},jsx("div",{},jsx("p",{className:"font-semibold text-gray-900"},("Mood: "+entry_rx_state_?.["mood_score"]+"/10")),jsx("p",{className:"text-sm text-gray-500"},entry_rx_state_?.["timestamp"])),jsx("div",{className:"flex flex-wrap gap-2 mt-2"},Array.prototype.map.call(entry_rx_state_?.["tags"] ?? [],((tag_rx_state_,index_1bcf946cb28d0a5ee2415f983e32b058)=>(jsx("span",{className:"px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full",key:index_1bcf946cb28d0a5ee2415f983e32b058},(((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())(tag_rx_state_))))))))))))
  )
}


function Fragment_ecb522f69a168e6ca9ac500c765f0a3e () {
  const reflex___state____state__app___states___mood_state____mood_state = useContext(StateContexts.reflex___state____state__app___states___mood_state____mood_state)



  return (
    jsx(Fragment,{},((reflex___state____state__app___states___mood_state____mood_state.mood_entries_rx_state_.length > 0)?(jsx(Fragment,{},jsx(Div_565950ea565ed6ab3922fdd73c49d6e8,{},))):(jsx(Fragment,{},jsx("p",{className:"text-gray-500"},"No mood entries yet.")))))
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


function Fragment_677cc97984fcbd4578e748ef37c3f443 () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx(Fragment,{},(reflex___state____state__app___states___auth_state____auth_state.is_authenticated_rx_state_?(jsx(Fragment,{},jsx("div",{className:"min-h-screen bg-gray-50 flex flex-col font-['Inter']"},jsx("header",{className:"py-4 px-6 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"},jsx("div",{className:"container mx-auto flex justify-between items-center"},jsx(ReactRouterLink,{to:"/"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideSmilePlus,{className:"h-8 w-8 text-purple-600"},),jsx("span",{className:"text-xl font-bold text-gray-800"},"MoodBite"))),jsx(Fragment_3470c765583f95e8ec81bb039d245afc,{},))),jsx("main",{className:"flex-grow"},jsx("div",{className:"container mx-auto py-8 px-6 max-w-3xl"},jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8"},"Mood Tracker"),jsx("div",{className:"bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start gap-6"},jsx("div",{className:"w-full"},jsx(Label_c97ea3ea438f95f39c0977da3e024733,{},),jsx(Input_c1d1257580434efd47460449b7155226,{},)),jsx("div",{className:"w-full"},jsx("label",{className:"text-lg font-medium text-gray-700 mb-4"},"What's contributing to your mood? (optional)"),jsx(Div_0cd6bbb75fc4e2685310f49ea879ce61,{},)),jsx(Button_900effec0ec0ee237917ca7a90bc10d0,{},)),jsx("div",{className:"bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-8"},jsx(Responsivecontainer_d4ec6ab5a1a5bcd55aa7de2e8ec9a47b,{},)),jsx("div",{className:"mt-8"},jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-4"},"Recent Entries"),jsx(Fragment_ecb522f69a168e6ca9ac500c765f0a3e,{},))))))):(jsx(Fragment,{},jsx(Div_f1436fc101b770a2b738f5c1136ca033,{},)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Fragment_677cc97984fcbd4578e748ef37c3f443,{},),jsx("title",{},"App | Mood-Tracker"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}