import {Fragment,lazy,useCallback,useContext,useEffect} from "react"
import {ClientSide,EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isTrue} from "$/utils/state"
import {Link as ReactRouterLink} from "react-router"
import {BookText as LucideBookText,CirclePlus as LucideCirclePlus,LineChart as LucideLineChart,Smile as LucideSmile,SmilePlus as LucideSmilePlus,SquarePen as LucideSquarePen,Utensils as LucideUtensils,UtensilsCrossed as LucideUtensilsCrossed} from "lucide-react"
import {Bar as RechartsBar,CartesianGrid as RechartsCartesianGrid,Line as RechartsLine,ResponsiveContainer as RechartsResponsiveContainer,Tooltip as RechartsTooltip,XAxis as RechartsXAxis,YAxis as RechartsYAxis} from "recharts"
import {jsx} from "@emotion/react"

const RechartsBarChart = ClientSide(lazy(() => import('recharts').then((mod) => ({default: mod.BarChart}))))
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


function P_5b9d771f460a3a95734effbe5e69c652 () {
  const reflex___state____state__app___states___mood_state____mood_state = useContext(StateContexts.reflex___state____state__app___states___mood_state____mood_state)



  return (
    jsx("p",{className:"text-2xl font-bold text-gray-900"},(JSON.stringify(reflex___state____state__app___states___mood_state____mood_state.last_mood_score_rx_state_)))
  )
}


function P_ad37b2259ae9b28df3765ae8b77c7e3c () {
  const reflex___state____state__app___states___mood_state____mood_state = useContext(StateContexts.reflex___state____state__app___states___mood_state____mood_state)



  return (
    jsx("p",{className:"text-2xl font-bold text-gray-900"},(JSON.stringify(reflex___state____state__app___states___mood_state____mood_state.average_mood_last_7_days_rx_state_)))
  )
}


function P_333c1c07755647637ad9157c24868103 () {
  const reflex___state____state__app___states___journal_state____journal_state = useContext(StateContexts.reflex___state____state__app___states___journal_state____journal_state)



  return (
    jsx("p",{className:"text-2xl font-bold text-gray-900"},(JSON.stringify(reflex___state____state__app___states___journal_state____journal_state.journal_entries_rx_state_.length)))
  )
}


function P_3d3fa05a1ed3cd5e41d57b27cd00afa6 () {
  const reflex___state____state__app___states___food_state____food_state = useContext(StateContexts.reflex___state____state__app___states___food_state____food_state)



  return (
    jsx("p",{className:"text-2xl font-bold text-gray-900"},(JSON.stringify(reflex___state____state__app___states___food_state____food_state.food_log_entries_rx_state_.length)))
  )
}


function Responsivecontainer_4d25eeb035aacfef6c1c6591a081d589 () {
  const reflex___state____state__app___states___mood_state____mood_state = useContext(StateContexts.reflex___state____state__app___states___mood_state____mood_state)



  return (
    jsx(RechartsResponsiveContainer,{height:250,minHeight:10,minWidth:10,width:"100%"},jsx(RechartsLineChart,{data:reflex___state____state__app___states___mood_state____mood_state.mood_history_last_7_days_rx_state_,height:"100%",width:"100%"},jsx(RechartsCartesianGrid,{stroke:"var(--gray-7)",strokeDasharray:"3 3"},),jsx(RechartsTooltip,{contentStyle:({ ["background"] : "var(--gray-1)", ["borderColor"] : "var(--gray-4)", ["borderRadius"] : "8px" }),cursor:({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" }),itemStyle:({ ["color"] : "var(--gray-12)" }),labelStyle:({ ["color"] : "var(--gray-11)" })},),jsx(RechartsXAxis,{dataKey:"date",stroke:"var(--gray-9)"},),jsx(RechartsYAxis,{domain:[0, 10],stroke:"var(--gray-9)"},),jsx(RechartsLine,{activeDot:({ ["stroke"] : "var(--accent-2)", ["fill"] : "var(--accent-10)" }),dataKey:"mood_score",dot:({ ["stroke"] : "var(--accent-10)", ["fill"] : "var(--accent-4)" }),stroke:"#8884d8",type:"monotone"},)))
  )
}


function Responsivecontainer_dbe490b3eabf68493b07ab7a36d5b4ef () {
  const reflex___state____state__app___states___food_state____food_state = useContext(StateContexts.reflex___state____state__app___states___food_state____food_state)



  return (
    jsx(RechartsResponsiveContainer,{height:250,minHeight:10,minWidth:10,width:"100%"},jsx(RechartsBarChart,{data:reflex___state____state__app___states___food_state____food_state.food_frequency_rx_state_,height:"100%",width:"100%"},jsx(RechartsCartesianGrid,{stroke:"var(--gray-7)",strokeDasharray:"3 3"},),jsx(RechartsTooltip,{contentStyle:({ ["background"] : "var(--gray-1)", ["borderColor"] : "var(--gray-4)", ["borderRadius"] : "8px" }),cursor:({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" }),itemStyle:({ ["color"] : "var(--gray-12)" }),labelStyle:({ ["color"] : "var(--gray-11)" })},),jsx(RechartsXAxis,{dataKey:"food",stroke:"var(--gray-9)"},),jsx(RechartsYAxis,{stroke:"var(--gray-9)"},),jsx(RechartsBar,{dataKey:"count",fill:"#8884d8"},)))
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


function Fragment_ed28310717e994f4bf7961a90501ab00 () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx(Fragment,{},(reflex___state____state__app___states___auth_state____auth_state.is_authenticated_rx_state_?(jsx(Fragment,{},jsx("div",{className:"min-h-screen bg-gray-50 flex flex-col font-['Inter']"},jsx("header",{className:"py-4 px-6 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"},jsx("div",{className:"container mx-auto flex justify-between items-center"},jsx(ReactRouterLink,{to:"/"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideSmilePlus,{className:"h-8 w-8 text-purple-600"},),jsx("span",{className:"text-xl font-bold text-gray-800"},"MoodBite"))),jsx(Fragment_3470c765583f95e8ec81bb039d245afc,{},))),jsx("main",{className:"flex-grow"},jsx("div",{className:"container mx-auto py-8 px-6"},jsx("h1",{className:"text-3xl font-bold text-gray-900"},"Welcome Back!"),jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"},jsx("div",{className:"flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm"},jsx(LucideSmile,{className:"h-6 w-6 text-purple-600"},),jsx("div",{className:"flex flex-col"},jsx("p",{className:"text-sm font-medium text-gray-500"},"Current Mood"),jsx(P_5b9d771f460a3a95734effbe5e69c652,{},))),jsx("div",{className:"flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm"},jsx(LucideLineChart,{className:"h-6 w-6 text-purple-600"},),jsx("div",{className:"flex flex-col"},jsx("p",{className:"text-sm font-medium text-gray-500"},"7-Day Avg Mood"),jsx(P_ad37b2259ae9b28df3765ae8b77c7e3c,{},))),jsx("div",{className:"flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm"},jsx(LucideBookText,{className:"h-6 w-6 text-purple-600"},),jsx("div",{className:"flex flex-col"},jsx("p",{className:"text-sm font-medium text-gray-500"},"Journal Entries"),jsx(P_333c1c07755647637ad9157c24868103,{},))),jsx("div",{className:"flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm"},jsx(LucideUtensils,{className:"h-6 w-6 text-purple-600"},),jsx("div",{className:"flex flex-col"},jsx("p",{className:"text-sm font-medium text-gray-500"},"Food Entries"),jsx(P_3d3fa05a1ed3cd5e41d57b27cd00afa6,{},)))),jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"},jsx(ReactRouterLink,{to:"/mood-tracker"},jsx("div",{className:"p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"},jsx(LucideCirclePlus,{className:"h-8 w-8 text-purple-600 mb-4"},),jsx("h3",{className:"text-lg font-semibold text-gray-800"},"Log Mood"),jsx("p",{className:"text-sm text-gray-500 mt-1"},"Record your current mood and tags."))),jsx(ReactRouterLink,{to:"/journal"},jsx("div",{className:"p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"},jsx(LucideSquarePen,{className:"h-8 w-8 text-purple-600 mb-4"},),jsx("h3",{className:"text-lg font-semibold text-gray-800"},"Write Journal"),jsx("p",{className:"text-sm text-gray-500 mt-1"},"Reflect on your day with a journal entry."))),jsx(ReactRouterLink,{to:"/food-log"},jsx("div",{className:"p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"},jsx(LucideUtensilsCrossed,{className:"h-8 w-8 text-purple-600 mb-4"},),jsx("h3",{className:"text-lg font-semibold text-gray-800"},"Log Food"),jsx("p",{className:"text-sm text-gray-500 mt-1"},"Add a food item to your daily log.")))),jsx("div",{className:"grid lg:grid-cols-2 gap-8 mt-8"},jsx("div",{className:"bg-white p-4 rounded-xl border border-gray-200 shadow-sm"},jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-4 px-6"},"7-Day Mood Trend"),jsx(Responsivecontainer_4d25eeb035aacfef6c1c6591a081d589,{},)),jsx("div",{className:"bg-white p-4 rounded-xl border border-gray-200 shadow-sm"},jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-4 px-6"},"Top 5 Logged Foods"),jsx(Responsivecontainer_dbe490b3eabf68493b07ab7a36d5b4ef,{},)))))))):(jsx(Fragment,{},jsx(Div_f1436fc101b770a2b738f5c1136ca033,{},)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Fragment_ed28310717e994f4bf7961a90501ab00,{},),jsx("title",{},"App | Dashboard"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}