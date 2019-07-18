import React from 'react'
import { Checkbox, Node } from '@dhis2/ui-core'

export const Tree = () => (
    <section>
        <Node component={<Checkbox label="Node label" name="l1.1" />} open>
            <Node component={<Checkbox label="Node label" name="l2.1" />} open>
                <Node component={<Checkbox label="Node label" name="l3.1" />} />
                <Node component={<Checkbox label="Node label" name="l3.2" />} />
                <Node component={<Checkbox label="Node label" name="l3.3" />} />
            </Node>
            <Node component={<Checkbox label="Node label" name="l3.1" />}>
                <Node component={<Checkbox label="Node label" name="l3.4" />} />
                <Node component={<Checkbox label="Node label" name="l3.5" />} />
                <Node component={<Checkbox label="Node label" name="l3.6" />} />
            </Node>
            <Node component={<Checkbox label="Node label" name="l2.3" />} />
            <Node component={<Checkbox label="Node label" name="l2.4" />} />
            <Node component={<Checkbox label="Node label" name="l2.5" />} />
            <Node component={<Checkbox label="Node label" name="l2.5" />} />
        </Node>
    </section>
)
