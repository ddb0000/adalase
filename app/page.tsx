import Script from "next/script";

const title = "ADALASE";
const description = "create and manage your virtual persona";
const github = "https://github.com/ddb0000/adalase";

export default function Home() {
  return (
    <main className="container">
        <section className="content">
            <section className="card">
                <div className="profile">
                    <img id="profile-pic" className="hidden" src="" alt="Profile Picture"/>
                    <p id="name" className="hidden"></p>
                    <p id="bio" className="hidden"></p>
                </div>
                <button id="generate" className="gen-btn"></button>
            </section>           
        </section>
        <Script src='/main.js'/>
      </main>
  );
}
