import React,{useState} from 'react'
import MyComponent from './components/MyComponent'
// import LoginScreen from './components/LoginScreen'
import Navigation from './components/Navigation'

const MainComponent = () => {
    const [isLogin,setIsLogin] = useState(false)
    return (
        <>
        {isLogin ? <Navigation /> : <MyComponent />}
        </>
    )
}

export default MainComponent
