import { useState } from 'react';
import Group from './Group';
import ColorBox from './ColorBox';
import { months, calcButtonTextColor } from './tools';

export default function EditableUserProfile({
    stored,
    startEditCallback
}) {

    console.log()

    const buttonStyle = {
        backgroundColor: stored.color,
        color: calcButtonTextColor(stored.color)
    };

    return <div>
        <Group>
            <h2>First Name:</h2> {stored.fname}
        </Group>
        <Group>
            <h2>Last Name:</h2> {stored.lname}
        </Group>
        <Group>
            <h2>Age:</h2> {stored.age}
        </Group>
        <Group>
            <h2>Address:</h2> {stored.address}
        </Group>
        <Group>
            <h2>Gender:</h2> {stored.gender}
        </Group>
        <Group>
            <h2>Nationality:</h2> {stored.nation}
        </Group>
        <Group>
            <h2>Contact Number:</h2> {stored.contact}
        </Group>
        <Group>
            <h2>Birthday:</h2> {months.getShortName(stored.month)} {stored.day}
        </Group>
        <Group>
            <h2>Favourite Color:</h2> <ColorBox color={stored.color}/>
        </Group>
        <Group>
            <button
                style={buttonStyle}
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}