import { useState } from 'react'
import { AboutMe, Portfolio, Resume, Contact} from "../pages"
import { Project } from "./"
export default function Main({ children }) {
  return <main>{children}</main>;
}