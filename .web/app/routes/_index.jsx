import {Fragment,useCallback,useContext,useEffect} from "react"
import {Link as ReactRouterLink} from "react-router"
import {FlagTriangleRight as LucideFlagTriangleRight,SmilePlus as LucideSmilePlus} from "lucide-react"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,getRefValue,getRefValues,isTrue} from "$/utils/state"
import {Spinner as RadixThemesSpinner} from "@radix-ui/themes"
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


function H2_a080714cd4d23ed2a43a4674c89bfb4a () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx("h2",{className:"text-2xl font-bold text-gray-900"},(reflex___state____state__app___states___auth_state____auth_state.show_login_rx_state_ ? "Welcome Back" : "Create an Account"))
  )
}


function P_70083bef95414abeb17593235459059a () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx("p",{className:"text-sm text-gray-600 mt-1"},(reflex___state____state__app___states___auth_state____auth_state.show_login_rx_state_ ? "Sign in to continue to MoodBite." : "Start your journey with us today."))
  )
}


function Div_2d482db257a30747175e581a3f7710aa () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx("div",{className:"bg-red-100 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm flex items-center"},jsx(LucideFlagTriangleRight,{className:"h-4 w-4 mr-2"},),reflex___state____state__app___states___auth_state____auth_state.error_message_rx_state_)
  )
}


function Fragment_9b189a49560b2e5cb255c68a4e9d2d1c () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx(Fragment,{},(!((reflex___state____state__app___states___auth_state____auth_state.error_message_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(Div_2d482db257a30747175e581a3f7710aa,{},))):(jsx(Fragment,{},))))
  )
}


function Input_52975e1f132a1f21dbda98792fe4c8aa () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_5190c956b60580aac27a8f82a8dd01b2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___auth_state____auth_state.set_login_username", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all",defaultValue:reflex___state____state__app___states___auth_state____auth_state.login_username_rx_state_,onChange:on_change_5190c956b60580aac27a8f82a8dd01b2,placeholder:"Email",type:"email"},)
  )
}


function Input_256326ccdca1d2ba33d54ec98382557e () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_101fccc815fcf08a5991186307204ec5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___auth_state____auth_state.set_login_password", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all",defaultValue:reflex___state____state__app___states___auth_state____auth_state.login_password_rx_state_,onChange:on_change_101fccc815fcf08a5991186307204ec5,placeholder:"Password",type:"password"},)
  )
}


function Fragment_98d2718d353b67d92402bbb567a20917 () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx(Fragment,{},(reflex___state____state__app___states___auth_state____auth_state.is_loading_rx_state_?(jsx(Fragment,{},jsx(RadixThemesSpinner,{className:"text-white"},))):(jsx(Fragment,{},"Sign In"))))
  )
}


function Button_0916a1a862a8b38bee73e51ef9abc1f7 () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_8966b21ba476d808907e7d0db6c018fe = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___auth_state____auth_state.login", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"w-full py-3 px-4 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center",disabled:!(reflex___state____state__app___states___auth_state____auth_state.login_form_is_valid_rx_state_),onClick:on_click_8966b21ba476d808907e7d0db6c018fe},jsx(Fragment_98d2718d353b67d92402bbb567a20917,{},))
  )
}


function Form_56c4e35e397e48c89082a5765148fb0f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

    const handleSubmit_33e0b5f7747235aa0b1d099d6948af88 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.app___states___auth_state____auth_state.login", ({  }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


  return (
    jsx("form",{css:({ ["width"] : "100%" }),onSubmit:handleSubmit_33e0b5f7747235aa0b1d099d6948af88},jsx("div",{className:"flex flex-col gap-4"},jsx(Input_52975e1f132a1f21dbda98792fe4c8aa,{},),jsx(Input_256326ccdca1d2ba33d54ec98382557e,{},),jsx(Button_0916a1a862a8b38bee73e51ef9abc1f7,{},)))
  )
}


function Input_28e5670768451c8b3b73f75cd862fd32 () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_830b80b32a8aa6f2ed28b7a364f277cf = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___auth_state____auth_state.set_signup_username", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all",defaultValue:reflex___state____state__app___states___auth_state____auth_state.signup_username_rx_state_,onChange:on_change_830b80b32a8aa6f2ed28b7a364f277cf,placeholder:"Email",type:"email"},)
  )
}


function Input_7cd3dad24536a0c10767ae8e05936b13 () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_a0e0e7ba277a865bacb3a816af3b9acb = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___auth_state____auth_state.set_signup_password", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all",defaultValue:reflex___state____state__app___states___auth_state____auth_state.signup_password_rx_state_,onChange:on_change_a0e0e7ba277a865bacb3a816af3b9acb,placeholder:"Password",type:"password"},)
  )
}


function Input_2a7ee5f980179427bd49ceefa52672a6 () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_96c1218f7fca7ca4cddab81fc546856f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___auth_state____auth_state.set_signup_confirm_password", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("input",{className:"w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all",defaultValue:reflex___state____state__app___states___auth_state____auth_state.signup_confirm_password_rx_state_,onChange:on_change_96c1218f7fca7ca4cddab81fc546856f,placeholder:"Confirm Password",type:"password"},)
  )
}


function Fragment_6921019420e77b50db301dbcf1b9984a () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx(Fragment,{},(reflex___state____state__app___states___auth_state____auth_state.is_loading_rx_state_?(jsx(Fragment,{},jsx(RadixThemesSpinner,{className:"text-white"},))):(jsx(Fragment,{},"Create Account"))))
  )
}


function Button_a38335d269019c0a49f5780ec240b572 () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_c7cdf56fdcbcff836742244ba4553918 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___auth_state____auth_state.signup", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"w-full py-3 px-4 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center",disabled:!(reflex___state____state__app___states___auth_state____auth_state.signup_form_is_valid_rx_state_),onClick:on_click_c7cdf56fdcbcff836742244ba4553918},jsx(Fragment_6921019420e77b50db301dbcf1b9984a,{},))
  )
}


function Form_c1f85c9ce18f18adb699604bd4917d7f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

    const handleSubmit_cac60895701f1b439ce821d310b20613 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.app___states___auth_state____auth_state.signup", ({  }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


  return (
    jsx("form",{css:({ ["width"] : "100%" }),onSubmit:handleSubmit_cac60895701f1b439ce821d310b20613},jsx("div",{className:"flex flex-col gap-4"},jsx(Input_28e5670768451c8b3b73f75cd862fd32,{},),jsx(Input_7cd3dad24536a0c10767ae8e05936b13,{},),jsx(Input_2a7ee5f980179427bd49ceefa52672a6,{},),jsx(Button_a38335d269019c0a49f5780ec240b572,{},)))
  )
}


function Fragment_4ea9a8c747eeaa971847a5f47e896a1b () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx(Fragment,{},(reflex___state____state__app___states___auth_state____auth_state.show_login_rx_state_?(jsx(Fragment,{},jsx(Form_56c4e35e397e48c89082a5765148fb0f,{},))):(jsx(Fragment,{},jsx(Form_c1f85c9ce18f18adb699604bd4917d7f,{},)))))
  )
}


function Button_79f06d976c283dc9c0a773ccf7a1d420 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)

const on_click_29410b2ed43cce146312fb4db16fc10d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.app___states___auth_state____auth_state.toggle_form", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx("button",{className:"font-semibold text-purple-600 hover:text-purple-800",onClick:on_click_29410b2ed43cce146312fb4db16fc10d},(reflex___state____state__app___states___auth_state____auth_state.show_login_rx_state_ ? "Sign Up" : "Sign In"))
  )
}


function Div_5a131d47353d2fc6e0369f8ecd2bce47 () {
  const reflex___state____state__app___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__app___states___auth_state____auth_state)



  return (
    jsx("div",{className:"text-sm text-center text-gray-600"},(reflex___state____state__app___states___auth_state____auth_state.show_login_rx_state_ ? "Don't have an account? " : "Already have an account? "),jsx(Button_79f06d976c283dc9c0a773ccf7a1d420,{},))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx("div",{className:"min-h-screen bg-gray-50 flex flex-col font-['Inter']"},jsx("header",{className:"py-4 px-6 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"},jsx("div",{className:"container mx-auto flex justify-between items-center"},jsx(ReactRouterLink,{to:"/"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideSmilePlus,{className:"h-8 w-8 text-purple-600"},),jsx("span",{className:"text-xl font-bold text-gray-800"},"MoodBite"))),jsx(Fragment_3470c765583f95e8ec81bb039d245afc,{},))),jsx("main",{className:"flex-grow flex items-center"},jsx("div",{className:"container mx-auto flex flex-col items-center justify-center gap-12 px-4 py-16"},jsx("div",{className:"text-center"},jsx("h1",{className:"text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"},"Track Your Mood, Understand Your Life."),jsx("p",{className:"mt-4 text-lg text-gray-600 max-w-2xl mx-auto"},"MoodBite helps you find connections between your food, mood, and overall well-being with AI-powered insights.")),jsx("div",{className:"w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-6"},jsx("div",{className:"text-center"},jsx(H2_a080714cd4d23ed2a43a4674c89bfb4a,{},),jsx(P_70083bef95414abeb17593235459059a,{},)),jsx(Fragment_9b189a49560b2e5cb255c68a4e9d2d1c,{},),jsx(Fragment_4ea9a8c747eeaa971847a5f47e896a1b,{},),jsx(Div_5a131d47353d2fc6e0369f8ecd2bce47,{},))))),jsx("title",{},"App | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}