export const Home = () => {
    return (
    <>
       <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <p className="p1">World's best college</p>
                    

                    <p>MONTARY COLLEGE is a religious minority educational institution established by Tiruchirappalli – Thanjavur Diocese of the Church of South India. Its main objective is to cater for the higher educational needs of the members of the Church of South India and other Christians and specially to provide for them an educational atmosphere in keeping with the Christian ideals of the Church. The College, however, admits students of all faiths and religions and seeks to provide for them the best possible higher education. <br />Montary College traces its origin back to Montary Memorial School, which became a full-fledged High School in 1864. In 1873, the School was raised to a Second Grade College and in 1882, it became a First Grade College. It was then known as S.P.G. College. It was the first College to be established in Tiruchirappalli. Honours Courses in History and Mathematics were introduced in 1925. The College came to be known as Montary College in the late 1920’s and its Diamond Jubilee was celebrated in 1926 under the Presidentship of the then Governor of Madras, Lord Goschen.<br/></p>
                    <div className="btn btn-group">
                        <a href="/Contact">
                            <button className="btn">Connect Now</button>
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/images/image3.jpg" alt="homepage"  height="450" width="650" />
                </div>
            </div>
        </section>
       </main>

       <section className="section-analytics">
        <div className="container grid grid-four-cols">
            <div className="div1">
                <h2>200+</h2>
                <p>qualified staffs</p>
            </div>
            <div className="div2">
                <h2>100+</h2>
                <p>registered companies</p>
            </div>
            <div className="div3">
                <h2>1000+</h2>
                <p>company placed students</p>
            </div>
            <div className="div4">
                <h2>10000+</h2>
                <p>happy students</p>
            </div>
        </div>
       </section>
    </>
 
    );
};