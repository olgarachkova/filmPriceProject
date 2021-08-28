import './aboutProject.scss';

import React, { Fragment } from 'react';

import { Header } from 'components/header'
import { Footer } from 'components/footer'

export function AboutProject({ history }) {
    return (
        <Fragment>
            <Header history={history} />
            <main className='content'>
                <div className='container'>
                    <p>Информация о проекте</p>
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}