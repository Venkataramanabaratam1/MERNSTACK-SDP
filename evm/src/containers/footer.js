import React from 'react'
import Footer from '../footer/footer'
import Icon from '../footer/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="https://www.kluniversity.in/IR/default.aspx">Story</Footer.Link>
                    <Footer.Link href="https://www.kluniversity.in/IR/tpro.aspx">Clients</Footer.Link>
                    <Footer.Link href="https://www.kluniversity.in/IR/pfa.aspx">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="https://www.kluniversity.in/Why-KLU.aspx">Marketing</Footer.Link>
                    <Footer.Link href="https://www.kluniversity.in/cse1/default.aspx">Consulting</Footer.Link>
                    <Footer.Link href=" https://www.kluniversity.in/cse1/rnews.aspx">Development</Footer.Link>
                    <Footer.Link href="https://www.kluniversity.in/cse1/library.aspx">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="https://www.kluniversity.in/">United States</Footer.Link>
                    <Footer.Link href="https://www.kluniversity.in/">United Kingdom</Footer.Link>
                    <Footer.Link href="#]https://www.kluniversity.in/">Australia</Footer.Link>
                    <Footer.Link href="https://www.kluniversity.in/">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/KLUniversity/"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/kluniversityofficial/?hl=en"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://www.youtube.com/channel/UCDpAsRnAnV6ey0r-BaIfzkA"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="https://twitter.com/KLUniversity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}