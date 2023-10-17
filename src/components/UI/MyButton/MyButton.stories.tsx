import MyButton from "./MyButton"

export default {
    title: "buttons/MyButton",
    component: MyButton
}

const Template  =(arg:any)=><MyButton {...arg}/>

export const Default:any = ()=><MyButton type="button">Click</MyButton>

Default.args={
    children: 'Click',
    variant: 'small'
}