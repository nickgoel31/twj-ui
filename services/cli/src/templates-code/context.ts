export const NEXT__TYPESCRIPT_UI_THEME_CONTEXT = `"use client"

import React, { useEffect } from 'react'

export type ComponentsThemes = 'modern' | 'elegant' | 'cartoon'

// 'retro' | 'playful'

export type ComponentsColorSchemes = 'default'
                                    | 'sky'
                                    | 'purple'
                                    | 'gold'

const UIThemeContext = React.createContext<
{
    theme:ComponentsThemes, setTheme: 
    (theme:ComponentsThemes) => void,
    colorScheme: ComponentsColorSchemes, 
}>({theme: 'modern', setTheme: () => {}, colorScheme: 'default', })

const UIThemeProvider = ({ children, theme, colorScheme }:{children:React.ReactNode, theme?:ComponentsThemes, colorScheme?: ComponentsColorSchemes}) => {
    const [themeState, setThemeState] = React.useState<ComponentsThemes>(theme || 'modern')
    const [colorSchemeState, setColorSchemeState] = React.useState<ComponentsColorSchemes>(colorScheme || 'default')

    useEffect(() => {
        document.documentElement.setAttribute('data-color-scheme', colorSchemeState)
    },[colorSchemeState])
    return (
        <UIThemeContext.Provider value={{theme: themeState, setTheme: setThemeState, colorScheme: colorSchemeState}} >
            {children}
        </UIThemeContext.Provider>
    )
}

export const useUITheme = () => {
    const context = React.useContext(UIThemeContext)
    const {theme, setTheme,colorScheme,} = context
    const [themeState, setThemeState] = React.useState<ComponentsThemes>(theme)
    const [colorSchemeState, setColorSchemeState] = React.useState<ComponentsColorSchemes>(colorScheme)
    useEffect(() => {
        setTheme(themeState)
        
    },[setTheme, themeState, colorSchemeState])
    return {theme: themeState, setTheme: setThemeState, colorScheme: colorSchemeState, setColorScheme: setColorSchemeState}
}

export default UIThemeProvider`

export const NEXT__JAVASCRIPT_UI_THEME_CONTEXT = `"use client"

import React, { useEffect } from 'react'

export type ComponentsThemes = 'modern' | 'elegant' | 'cartoon'

// 'retro' | 'playful'

export type ComponentsColorSchemes = 'default'
                                    | 'sky'
                                    | 'purple'
                                    | 'gold'

const UIThemeContext = React.createContext<
{
    theme:ComponentsThemes, setTheme: 
    (theme:ComponentsThemes) => void,
    colorScheme: ComponentsColorSchemes, 
}>({theme: 'modern', setTheme: () => {}, colorScheme: 'default', })

const UIThemeProvider = ({ children, theme, colorScheme }:{children:React.ReactNode, theme?:ComponentsThemes, colorScheme?: ComponentsColorSchemes}) => {
    const [themeState, setThemeState] = React.useState<ComponentsThemes>(theme || 'modern')
    const [colorSchemeState, setColorSchemeState] = React.useState<ComponentsColorSchemes>(colorScheme || 'default')

    useEffect(() => {
        document.documentElement.setAttribute('data-color-scheme', colorSchemeState)
    },[colorSchemeState])
    return (
        <UIThemeContext.Provider value={{theme: themeState, setTheme: setThemeState, colorScheme: colorSchemeState}} >
            {children}
        </UIThemeContext.Provider>
    )
}

export const useUITheme = () => {
    const context = React.useContext(UIThemeContext)
    const {theme, setTheme,colorScheme,} = context
    const [themeState, setThemeState] = React.useState<ComponentsThemes>(theme)
    const [colorSchemeState, setColorSchemeState] = React.useState<ComponentsColorSchemes>(colorScheme)
    useEffect(() => {
        setTheme(themeState)
        
    },[setTheme, themeState, colorSchemeState])
    return {theme: themeState, setTheme: setThemeState, colorScheme: colorSchemeState, setColorScheme: setColorSchemeState}
}

export default UIThemeProvider`

export const REACT__TYPESCRIPT_UI_THEME_CONTEXT = `

import React, { useEffect } from 'react'

export type ComponentsThemes = 'modern' | 'elegant' | 'cartoon'

// 'retro' | 'playful'

export type ComponentsColorSchemes = 'default'
                                    | 'sky'
                                    | 'purple'
                                    | 'gold'

const UIThemeContext = React.createContext<
{
    theme:ComponentsThemes, setTheme: 
    (theme:ComponentsThemes) => void,
    colorScheme: ComponentsColorSchemes, 
}>({theme: 'modern', setTheme: () => {}, colorScheme: 'default', })

const UIThemeProvider = ({ children, theme, colorScheme }:{children:React.ReactNode, theme?:ComponentsThemes, colorScheme?: ComponentsColorSchemes}) => {
    const [themeState, setThemeState] = React.useState<ComponentsThemes>(theme || 'modern')
    const [colorSchemeState, setColorSchemeState] = React.useState<ComponentsColorSchemes>(colorScheme || 'default')

    useEffect(() => {
        document.documentElement.setAttribute('data-color-scheme', colorSchemeState)
    },[colorSchemeState])
    return (
        <UIThemeContext.Provider value={{theme: themeState, setTheme: setThemeState, colorScheme: colorSchemeState}} >
            {children}
        </UIThemeContext.Provider>
    )
}

export const useUITheme = () => {
    const context = React.useContext(UIThemeContext)
    const {theme, setTheme,colorScheme,} = context
    const [themeState, setThemeState] = React.useState<ComponentsThemes>(theme)
    const [colorSchemeState, setColorSchemeState] = React.useState<ComponentsColorSchemes>(colorScheme)
    useEffect(() => {
        setTheme(themeState)
        
    },[setTheme, themeState, colorSchemeState])
    return {theme: themeState, setTheme: setThemeState, colorScheme: colorSchemeState, setColorScheme: setColorSchemeState}
}

export default UIThemeProvider`

export const REACT__JAVASCRIPT_UI_THEME_CONTEXT = `

import React, { useEffect } from 'react'

export type ComponentsThemes = 'modern' | 'elegant' | 'cartoon'

// 'retro' | 'playful'

export type ComponentsColorSchemes = 'default'
                                    | 'sky'
                                    | 'purple'
                                    | 'gold'

const UIThemeContext = React.createContext<
{
    theme:ComponentsThemes, setTheme: 
    (theme:ComponentsThemes) => void,
    colorScheme: ComponentsColorSchemes, 
}>({theme: 'modern', setTheme: () => {}, colorScheme: 'default', })

const UIThemeProvider = ({ children, theme, colorScheme }:{children:React.ReactNode, theme?:ComponentsThemes, colorScheme?: ComponentsColorSchemes}) => {
    const [themeState, setThemeState] = React.useState<ComponentsThemes>(theme || 'modern')
    const [colorSchemeState, setColorSchemeState] = React.useState<ComponentsColorSchemes>(colorScheme || 'default')

    useEffect(() => {
        document.documentElement.setAttribute('data-color-scheme', colorSchemeState)
    },[colorSchemeState])
    return (
        <UIThemeContext.Provider value={{theme: themeState, setTheme: setThemeState, colorScheme: colorSchemeState}} >
            {children}
        </UIThemeContext.Provider>
    )
}

export const useUITheme = () => {
    const context = React.useContext(UIThemeContext)
    const {theme, setTheme,colorScheme,} = context
    const [themeState, setThemeState] = React.useState<ComponentsThemes>(theme)
    const [colorSchemeState, setColorSchemeState] = React.useState<ComponentsColorSchemes>(colorScheme)
    useEffect(() => {
        setTheme(themeState)
        
    },[setTheme, themeState, colorSchemeState])
    return {theme: themeState, setTheme: setThemeState, colorScheme: colorSchemeState, setColorScheme: setColorSchemeState}
}

export default UIThemeProvider`