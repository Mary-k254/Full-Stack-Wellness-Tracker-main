import { createContext, useContext, useMemo, useReducer, useState, createElement, useEffect } from "react"
import { applyDelta, ReflexEvent, hydrateClientStorage, useEventLoop, refs } from "$/utils/state"
import { jsx } from "@emotion/react";

export const initialState = {"reflex___state____state": {"is_hydrated_rx_state_": false, "router_rx_state_": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": "", "raw_headers": {}}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}, "url": "", "route_id": ""}}, "reflex___state____state.app___states___auth_state____auth_state": {"error_message_rx_state_": "", "is_authenticated_rx_state_": false, "is_loading_rx_state_": false, "login_form_is_valid_rx_state_": false, "login_password_rx_state_": "", "login_username_rx_state_": "", "show_login_rx_state_": true, "signup_confirm_password_rx_state_": "", "signup_form_is_valid_rx_state_": false, "signup_password_rx_state_": "", "signup_username_rx_state_": "", "token_rx_state_": ""}, "reflex___state____state.app___states___food_state____food_state": {"extracted_foods_preview_rx_state_": [], "food_db_options_rx_state_": ["almonds", "apple", "avocado", "banana", "beans", "beef", "beer", "bhajia", "bread", "broccoli", "butter", "cabbage", "cake", "candy", "carrots", "cashews", "cauliflower", "chapati", "cheese", "chicken", "chickpeas", "chips", "chocolate", "coffee", "cookies", "couscous", "cream", "cucumber", "eggplant", "eggs", "fish", "githeri", "grapes", "ice cream", "juice", "kachumbari", "kale", "lamb", "lentils", "lettuce", "mandazi", "mango", "matoke", "milk", "mukimo", "noodles", "nuts", "nyama choma", "oatmeal", "onion", "orange", "papaya", "passion fruit", "pasta", "peanuts", "pepper", "pilau", "pineapple", "plantain", "popcorn", "pork", "potato", "quinoa", "rice", "samosa", "smoothie", "soda", "spinach", "strawberry", "sukuma wiki", "sweet potato", "tea", "tofu", "tomato", "turkey", "ugali", "water", "watermelon", "wine", "yam", "yogurt"], "food_frequency_rx_state_": [], "food_log_entries_rx_state_": [], "free_text_input_rx_state_": "", "manual_food_selection_rx_state_": ""}, "reflex___state____state.app___states___journal_state____journal_state": {"current_journal_text_rx_state_": "", "journal_entries_rx_state_": [], "last_sentiment_rx_state_": "NEUTRAL", "sentiment_analysis_rx_state_": {"label": "NEUTRAL", "polarity": 0.0, "emoji": "😐"}}, "reflex___state____state.app___states___mood_state____mood_state": {"available_tags_rx_state_": ["happy", "sad", "anxious", "energetic", "tired", "focused", "stressed", "calm"], "average_mood_last_7_days_rx_state_": 0.0, "current_mood_score_rx_state_": 5, "last_mood_score_rx_state_": 0, "mood_entries_rx_state_": [], "mood_history_last_7_days_rx_state_": [{"date": "2025-11-13", "mood_score": 0, "tags": [], "timestamp": ""}, {"date": "2025-11-14", "mood_score": 0, "tags": [], "timestamp": ""}, {"date": "2025-11-15", "mood_score": 0, "tags": [], "timestamp": ""}, {"date": "2025-11-16", "mood_score": 0, "tags": [], "timestamp": ""}, {"date": "2025-11-17", "mood_score": 0, "tags": [], "timestamp": ""}, {"date": "2025-11-18", "mood_score": 0, "tags": [], "timestamp": ""}, {"date": "2025-11-19", "mood_score": 0, "tags": [], "timestamp": ""}], "selected_tags_rx_state_": []}, "reflex___state____state.app___states___profile_state____profile_state": {"data_analysis_consent_rx_state_": false, "notifications_enabled_rx_state_": true, "username_rx_state_": "user@example.com"}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}}

export const defaultColorMode = "light"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {reflex___state____state: createContext(null),reflex___state____state__app___states___auth_state____auth_state: createContext(null),reflex___state____state__app___states___food_state____food_state: createContext(null),reflex___state____state__app___states___journal_state____journal_state: createContext(null),reflex___state____state__app___states___mood_state____mood_state: createContext(null),reflex___state____state__app___states___profile_state____profile_state: createContext(null),reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),reflex___state____state__reflex___state____on_load_internal_state: createContext(null),reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),};
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}


export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            ReflexEvent(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(ReflexEvent('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    ReflexEvent('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]
    

export const isDevMode = true;

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return createElement(
    UploadFilesContext.Provider,
    { value: [filesById, setFilesById] },
    children
  );
}

export function ClientSide(component) {
  return ({ children, ...props }) => {
    const [Component, setComponent] = useState(null);
    useEffect(() => {
      setComponent(component);
    }, []);
    return Component ? jsx(Component, props, children) : null;
  };
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return createElement(
    EventLoopContext.Provider,
    { value: [addEvents, connectErrors] },
    children
  );
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
const [reflex___state____state__app___states___auth_state____auth_state, dispatch_reflex___state____state__app___states___auth_state____auth_state] = useReducer(applyDelta, initialState["reflex___state____state.app___states___auth_state____auth_state"])
const [reflex___state____state__app___states___food_state____food_state, dispatch_reflex___state____state__app___states___food_state____food_state] = useReducer(applyDelta, initialState["reflex___state____state.app___states___food_state____food_state"])
const [reflex___state____state__app___states___journal_state____journal_state, dispatch_reflex___state____state__app___states___journal_state____journal_state] = useReducer(applyDelta, initialState["reflex___state____state.app___states___journal_state____journal_state"])
const [reflex___state____state__app___states___mood_state____mood_state, dispatch_reflex___state____state__app___states___mood_state____mood_state] = useReducer(applyDelta, initialState["reflex___state____state.app___states___mood_state____mood_state"])
const [reflex___state____state__app___states___profile_state____profile_state, dispatch_reflex___state____state__app___states___profile_state____profile_state] = useReducer(applyDelta, initialState["reflex___state____state.app___states___profile_state____profile_state"])
const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
"reflex___state____state.app___states___auth_state____auth_state": dispatch_reflex___state____state__app___states___auth_state____auth_state,
"reflex___state____state.app___states___food_state____food_state": dispatch_reflex___state____state__app___states___food_state____food_state,
"reflex___state____state.app___states___journal_state____journal_state": dispatch_reflex___state____state__app___states___journal_state____journal_state,
"reflex___state____state.app___states___mood_state____mood_state": dispatch_reflex___state____state__app___states___mood_state____mood_state,
"reflex___state____state.app___states___profile_state____profile_state": dispatch_reflex___state____state__app___states___profile_state____profile_state,
"reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
"reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
"reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
    }
  }, [])

  return (
    createElement(StateContexts.reflex___state____state,{value: reflex___state____state},
createElement(StateContexts.reflex___state____state__app___states___auth_state____auth_state,{value: reflex___state____state__app___states___auth_state____auth_state},
createElement(StateContexts.reflex___state____state__app___states___food_state____food_state,{value: reflex___state____state__app___states___food_state____food_state},
createElement(StateContexts.reflex___state____state__app___states___journal_state____journal_state,{value: reflex___state____state__app___states___journal_state____journal_state},
createElement(StateContexts.reflex___state____state__app___states___mood_state____mood_state,{value: reflex___state____state__app___states___mood_state____mood_state},
createElement(StateContexts.reflex___state____state__app___states___profile_state____profile_state,{value: reflex___state____state__app___states___profile_state____profile_state},
createElement(StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state,{value: reflex___state____state__reflex___state____frontend_event_exception_state},
createElement(StateContexts.reflex___state____state__reflex___state____on_load_internal_state,{value: reflex___state____state__reflex___state____on_load_internal_state},
createElement(StateContexts.reflex___state____state__reflex___state____update_vars_internal_state,{value: reflex___state____state__reflex___state____update_vars_internal_state},
    createElement(DispatchContext, {value: dispatchers}, children)
    )))))))))
  )
}