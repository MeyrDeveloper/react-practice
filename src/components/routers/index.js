import React from 'react'
import {Link, Route} from 'react-router-dom'
import PageTemplate from '../Template'
import AboutMenu from './AboutMenu'
import {
    Company,
    History,
    Location,
    Service
} from './aboutComps'

export const Home = () => (
    <PageTemplate>
        <section>
            <h1>[HOME]</h1>
        </section>
    </PageTemplate>
)

export const About = (props) => {
    return (
        <PageTemplate>
            <section className="about-section">
                <Route component={AboutMenu} />
                <Route exact path="/about" component={Company} />
                <Route exact path="/about/history" component={History} />
                <Route exact path="/about/location" component={Location} />
                <Route exact path="/about/service" component={Service} />
            </section>
        </PageTemplate>
    )
}

export const Events = () => (
    <PageTemplate>
        <section>
            <h1>[EVENTS]</h1>
        </section>
    </PageTemplate>
)

export const Products = () => (
    <PageTemplate>
        <section>
            <h1>[PRODUCTS]</h1>
        </section>
    </PageTemplate>
)

export const Contact = () => (
    <PageTemplate>
        <section>
            <h1>[CONTACT]</h1>
        </section>
    </PageTemplate>
)

export const Page404 = () => (
    <PageTemplate>
        <section>
            <h1>[404]</h1>
        </section>
    </PageTemplate>
)