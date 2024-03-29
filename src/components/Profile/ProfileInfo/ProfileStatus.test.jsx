import React from "react";
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra");
    });
    test("After creation span should be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra"/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });
    test("After creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra"/>);
        const root = component.root;

        expect(() => {
            let input = root.findByType('input')
        }).toThrow();
    });
    test("After creation span should contains correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra"/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe('it-kamasutra');
    });
    test("input shiuld be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="it-kamasutra"/>);
        const root = component.root;
        let span = root.findByType('span')
        span.props.onClick()
        let input = root.findByType('span')
        expect(input.props.value).toBe('it-kamasutra');
    });
    test("callback should be called", () => {
        const mockCallBack = jest.fn()
        const component = create(<ProfileStatus status="it-kamasutra" updateStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode()
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});