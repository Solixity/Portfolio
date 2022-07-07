import Image from "next/image";

export default function Landing() {
    return (
        <>
            <a href={"#landing"}><small className={"hint"} id={"landing"}>/ #landing</small></a>
            <h1>Hello!</h1>
            <h3>I'm literally just another developer. One that's a <span style={{color: "orange"}}>red panda</span> at most but hey.. who's complainin'?</h3>

            <div style={{marginTop: "90px"}}>
                <a href={"#about-me"}><small className={"hint"} id={"about-me"}>/ #about-me</small></a>
                <h1 style={{marginBottom: "5px"}}>About Me</h1>
                <p>Hello. The name's Moz but you can call me Mozza.. or Forth.. or Mozman.. or wha- sorry. I'm 17, I reside on the East Coast of the US (it's pretty lonely here) and I'm bisexual. I spend most of my time working on projects below but I'll sometimes branch off and try new things except for food. I don't try new food. I'm a picky eater. <br/>However, if you need to get in contact with me, you can by emailing <a href={"mailto:hi@mozman.one"}>hi@mozman.one</a> and I'll reach back out to you shortly.</p>

            </div>

            <div style={{marginTop: "90px"}}>
                <a href={"#projects"}><small className={"hint"} id={"projects"}>/ #projects</small></a>
                <h1 style={{marginBottom: "20px"}}>My Projects</h1>

                <Image src={"/images/Fenix.png"} width={1500} height={500}></Image>
                <Image src={"/images/Discord Labs.png"} width={1500} height={500}></Image>
                <Image src={"/images/Levely.png"} width={1500} height={500}></Image>
            </div>

            <footer style={{marginTop: "240px"}}>
                <small className={"hint"}><i>2022, Mozza/Forth</i></small>
            </footer>
        </>
    )
}