import React, {Component} from 'react'
import DataHOC from './DataHOC'
import SelectItem from './SelectItem'

const App = DataHOC(SelectItem, "https://restcountries.eu/rest/v1/all")

export default App