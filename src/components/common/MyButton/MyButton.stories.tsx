import MyButton from "./MyButton"

export default {
    title: "MyButton",
    component: MyButton
}

const Template  =(arg:any)=><MyButton {...arg}/>

export const Default:any = ()=><MyButton>Click</MyButton>

Default.args={
    children: 'Click',
    variant: 'small'
}