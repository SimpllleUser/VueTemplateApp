import {ADD_MARKER, EDIT_MARKER, DELETE_MARKER} from "./types"

export default {
    [ADD_MARKER]: (state, marker) => {
        state.markers = [...state.markers, marker]

    },
    [DELETE_MARKER]: (state, markerIndex) => {
        state.markers = state.markers.filter((marker, index) => index !== markerIndex && marker)
    },
    [EDIT_MARKER]: (state, {editedMarker, markerIdx}) => {
        state.markers = state.markers.map((marker, index) => index === markerIdx ? editedMarker : marker)
    }

}
