import {shallow} from "enzyme";
import React from "react";
import {TodoCard} from "../src/screen/_Home";
import renderer from "react-test-renderer";

describe('Add Todo Form', () => {
    it('renders correctly', () => {
        const component = renderer.create(
            <TodoCard
                days={
                    {1: "Monday"}
                }
                id={"1234"}
                title={'title'}
                subtitle={'subtitle'}
                onPressEdit={jest.fn}
                onPressRemove={jest.fn}
            />
        )

        expect(component.toJSON()).toMatchSnapshot()
    })
})
