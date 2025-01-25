import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { UserContext } from './UserProvider.jsx'

const useTheme = () => useContext(ThemeContext)
const useGithobUser = () => useContext(UserContext)

export {useTheme, useGithobUser}