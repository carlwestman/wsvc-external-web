import React from 'react'
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;


class Contact extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor: "black",
                width: "500px",
                textAlign: "center"
            }
            }>
                <p style={{ color: "white" }}>
                    Coming soon...
            </p >
            </ div >

        )
    }
}

class Portfolio extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor: "black",
                width: "500px",
                textAlign: "center"
            }
            }>
                <p style={{ color: "white" }}>
                    Coming soon...
            </p >
            </ div >

        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor: "black",
                width: "500px",
                textAlign: "center"
            }
            }>
                <p style={{ color: "white" }}>
                    WhiteSpot Venture Capital is a single family office based in Stockholm, Sweden.
                    We manage assets of about 40 million SEK in private and public equities, debt and alternative
                    investments such as hedgefunds and real estate.
                </p >
                <br />
                <p style={{ color: "white" }}>
                    The majority of our holdings are in technology, fintech and clean energy.
                </p >
                <br />
                <p style={{ color: "white" }}>
                    The portfolio will over the next few years be shifted into a strategy focused on the areas of sustainable energy production, storage and distribution.

            </p >
            </ div >

        )
    }
}

class Start extends React.Component {
    render() {
        return (

            <img
                src="assets/wsvcLogo.png"
                style={{ maxWidth: "500px", width: "100%" }}
                alt="Wsvc logo"
            />


        )
    }
}

export default class Main extends React.Component {
    state = {
        currentViewKey: "start"
    }

    componentDidMount() {
        window.addEventListener('resize', this.setMenuMode)
        this.setMenuMode()
    }

    setMenuMode = () => {
        const width = window.innerWidth
        if (width > 500) {
            this.setState({ menuMode: "horizontal" })
        } else {
            this.setState({ menuMode: "inline" })

        }
    }

    setViewKey = (e) => {
        this.setState({
            currentViewKey: e.key
        })
    }

    render() {
        const viewsList = {
            start: { component: <Start />, color: 'black' },
            about: { component: <About />, color: 'black' },
            portfolio: { component: <Portfolio />, color: 'black' },
            contact: { component: <Contact />, color: 'black' },
        }
        const { currentViewKey, menuMode } = this.state
        const currentView = viewsList[currentViewKey]
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Header style={{ padding: "0px" }}>
                    <Menu
                        mode={menuMode}
                        style={{
                            background: "black",
                            textAlign: "center"
                        }}
                        onClick={e => this.setViewKey(e)}
                        selectedKeys={currentViewKey}>
                        <Menu.Item key="start" className="customclass">Start</Menu.Item>
                        <Menu.Item key="about" className="customclass">About</Menu.Item>
                        <Menu.Item key="portfolio" className="customclass">Portfolio</Menu.Item>
                        <Menu.Item key="contact" className="customclass">Contact</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{
                    padding: 24,
                    minHeight: 280,
                    backgroundColor: 'black',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    {currentView.component}
                </Content>
            </Layout>

        )
    }
}