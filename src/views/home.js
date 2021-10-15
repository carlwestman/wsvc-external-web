import React from 'react'
import { Layout, Menu, Card, Image, Row, Divider, Button, Form, Input, Drawer } from 'antd';
import { LinkOutlined, MenuOutlined } from '@ant-design/icons';
const sgMail = require('@sendgrid/mail')
const { Header, Content } = Layout;

class Contact extends React.Component {

    onFinish = (values) => {

    }


    render() {

        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} is not a valid email!',
                number: '${label} is not a valid number!',
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };

        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };

        return (
            <div style={{ width: "500px" }}>
                <Divider style={{ borderColor: "#0f7f00", color: "white" }}>Contact</Divider>
                <p style={{ color: "white" }}>
                    Are you an entreprenuer in the clean tech or renewable energy space or do you have an investment idea within the space that you would like to
                    share? Please send us an email using the form below and we will get back to you as soon as possible.
                </p >

                <Form {...layout} style={{ color: "white" }} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                    <Form.Item name={['name']} label="Name" rules={[{ required: true }]} style={{ color: "white" }}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['email']} label="Email" rules={[{ type: 'email' }]} rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['message']} label="Message" rules={[{ required: true }]}>
                        <Input.TextArea rows={5} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit" style={{ backgroundColor: "#0f7f00", borderColor: "#0f7f00" }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <Divider style={{ borderColor: "#0f7f00", color: "white" }}></Divider>

            </ div >

        )
    }
}


class PortfolioCard extends React.Component {

    render() {
        const { img, url, name, sector } = this.props
        return (
            <div style={{ marginBottom: "15px" }}>
                <Card style={{
                    marginBottom: "15px", height: "176px", width: "176px", display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Image src={img} maxHeight="128px" maxWidth="128px" />
                </Card>
                <p style={{ color: "white", marginBottom: "0px", textAlign: "center" }}>{name}</p>
                <p style={{ color: "white", marginBottom: "0px", textAlign: "center" }}>{sector}</p>
                <div style={{ textAlign: "center" }}>
                    <Button type="link" icon={<LinkOutlined style={{ color: "#0f7f00" }} />} size="sm"
                        href={"http://" + url} target="_blank" />
                </div>
            </div>
        )
    }
}

class Portfolio extends React.Component {
    render() {

        const publicCompanies = [
            { name: 'SolTech Energy', url: 'www.soltechenergy.com', sector: 'Renewable Energy', img: 'assets/soltechenergy_logo.png' },
            { name: 'Climeon', url: 'www.climeon.com', sector: 'Renewable Energy', img: 'assets/climeon_logo.png' },
            { name: 'Swedish Stirling', url: 'www.swedishstirling.com', sector: 'Renewable Energy', img: 'assets/swedishstirling_logo.png' },
            { name: 'Boliden', url: 'www.boliden.com', sector: 'Mining', img: 'assets/boliden_logo.png' },
            { name: 'Lundin Mining', url: 'www.lundinmining.com', sector: 'Mining', img: 'assets/lundinmining_logo.png' },
            { name: 'Solaredge', url: 'www.solaredge.us', sector: 'Renewable Energy', img: 'assets/solaredge_logo.png' },
            { name: 'Galaxy Digital', url: 'www.galaxydigital.io', sector: 'Crypto, Investment Banking', img: 'assets/galaxydigital_logo.png' },
            { name: 'Fortinet', url: 'www.fortinet.com', sector: 'Cyber Security', img: 'assets/fortinet_logo.png' },
            { name: 'Abcellera', url: 'www.abcellera.com', sector: 'MedTech', img: 'assets/abcellera_logo.png' },
            { name: 'Azelio', url: 'www.azelio.com', sector: 'Renewable Energy', img: 'assets/azelio_logo.png' },
            { name: 'Brookfield Renewable', url: 'bep.brookfieldrenewable.com', sector: 'Renewable Energy', img: 'assets/brookfieldrenewable_logo.png' },
            { name: 'Crowdstrike', url: 'www.crowdstrike.com', sector: 'Cyber Security', img: 'assets/crowdstrike_logo.png' }]
        const privateCompanies = [
            { name: 'Klarna', url: 'www.klarna.com', sector: 'FinTech', img: 'assets/klarna_logo.png' },
            { name: 'Hexicon', url: 'www.hexicon.eu', sector: 'Renewable Energy', img: 'assets/hexicon_logo.png' },
            { name: 'Kivra', url: 'www.kivra.com', sector: 'FinTech', img: 'assets/kivra_logo.png' },
            { name: 'Tessin', url: 'www.tessin.com', sector: 'FinTech', img: 'assets/tessin_logo.png' },
            { name: 'O/O brewing', url: 'www.oobrewing.com', sector: 'Brewery', img: 'assets/oobrewing_logo.png' },
            { name: 'Hemma', url: 'www.hemma.se', sector: 'FinTech', img: 'assets/hemma_logo.png' }]
        const corporateBonds = [
            { name: 'SolTech Energy', url: 'www.soltechenergy.com', sector: 'Renewable Energy', img: 'assets/soltechenergy_logo.png' }]
        return (
            <div style={{ maxWidth: "800px" }}>
                <Divider style={{ borderColor: "#0f7f00", color: "white" }}>Public Equities</Divider>
                <Row wrap="true" justify="space-around" style={{ maxWidth: "800px" }}>
                    {publicCompanies.map(item => {
                        return (<PortfolioCard img={item.img}
                            url={item.url}
                            name={item.name}
                            sector={item.sector} />)
                    })}
                </Row>
                <Divider style={{ borderColor: "#0f7f00", color: "white" }}>Private Equities</Divider>
                <Row wrap="true" justify="space-around" style={{ maxWidth: "800px" }}>
                    {privateCompanies.map(item => {
                        return (<PortfolioCard img={item.img}
                            url={item.url}
                            name={item.name}
                            sector={item.sector} />)
                    })}
                </Row>
                <Divider style={{ borderColor: "#0f7f00", color: "white" }}>Corporate Bonds</Divider>
                <Row wrap="true" justify="space-around" style={{ maxWidth: "800px" }}>
                    {corporateBonds.map(item => {
                        return (<PortfolioCard img={item.img}
                            url={item.url}
                            name={item.name}
                            sector={item.sector} />)
                    })}
                </Row>
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
                <Divider style={{ borderColor: "#0f7f00", color: "white" }}>About</Divider>

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
                    The portfolio will over the next few years be shifted into a strategy focused on the areas of sustainable energy production, storage and distribution, basic materials and technology needed to transition to sustainable energy.

                </p >
                <Divider style={{ borderColor: "#0f7f00", color: "white" }}></Divider>

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
        currentViewKey: "start",
        inlineMenuVisible: false
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
            // portfolio: { component: <Portfolio />, color: 'black' },
            contact: { component: <Contact />, color: 'black' },
        }
        const menuItems = [
            {
                display: "Start",
                key: "start"
            },
            {
                display: "About",
                key: "about"
            },
            // {
            //     display: "Portfolio",
            //     key: "portfolio"
            // },
            {
                display: "Contact",
                key: "contact"
            }
        ]

        const { currentViewKey, menuMode, inlineMenuVisible } = this.state
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
                        {menuMode === "horizontal" ?
                            <>
                                <Menu.Item key="start" className="customclass">Start</Menu.Item>
                                <Menu.Item key="about" className="customclass">About</Menu.Item>
                                {/* <Menu.Item key="portfolio" className="customclass">Portfolio</Menu.Item> */}
                                <Menu.Item key="contact" className="customclass">Contact</Menu.Item>
                            </> :
                            <MenuOutlined style={{ color: "#0f7f00" }} />
                        }

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