import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import AppColor from '../theme/AppColor';


const DropdownComponent = ({ value, items, onChange }) => {
    const [open, setOpen] = useState(false);

    return <DropDownPicker
        open={open}
        value={value}
        setOpen={setOpen}
        setValue={onChange}
        items={items}
        style={{
            borderRadius: 14,
            backgroundColor: AppColor.lightDark
        }}
    />
}

export default DropdownComponent