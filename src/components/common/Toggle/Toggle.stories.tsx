import { useState } from 'react'
import Toggle from './Toggle'


export default {
    title: "Toggle",
    component: Toggle
}

const Template = (arg:any)=>{
    return(
        <Toggle nameBtn='1' >
        <div>
          d
        </div>
      </Toggle>
    )
}
export const Default:any = Template.bind({})

Default.args={
    children: 'Click',
    nameBtn: 'small'
}