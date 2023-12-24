<script lang="ts">
  import { page } from "$app/stores";

  const lang: string = $page.params["lang"];

  let tagline = "";
  if (lang === "en") {
    tagline = "<i>unstoppable peer-to-peer communication</i>";
  }

  let inner = "";
  if (lang === "en") {
    inner = `
  <p>
      Earendil is the first anonymous communication and transaction network
      designed to be <i
        >decentralized, incentive-compatible, and ban-resistant</i
      >. It is a foundational off-chain protocol in the
      <a href="https://melproject.org">Mel</a> ecosystem.
    </p>
    <p>
      Unlike VPNs, onion routers, and most "censorship-resistant" web3
      protocols, Earendil is designed to run on <i
        >fully hostile network infrastructure</i
      >. It's nearly invisible to ISPs and defends against powerful attackers
      willing to <i>ban</i> rather than subvert or censor the protocol.
    </p>
    <p>
      Earendil is currently a work-in-progress. A
      minimally functional pre-alpha is <a href="https://docs.earendil.network/getting-started/quick-start">available</a>.
    </p>
    `;
  }
</script>

<svelte:head>
  <title>Earendil</title>
  <meta name="description" content={tagline} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@publisher_handle" />
  <meta name="twitter:title" content="Earendil" />
  <meta name="twitter:description" content={tagline} />
</svelte:head>

<div class="container content hero" {lang}>
  <h1><img src="/logo.png" class="logo" /> earendil</h1>
  <h2>{@html tagline}</h2>

  <p class="links">
    <a href="https://docs.earendil.network">docs</a> /
    <a href="https://github.com/mel-project/earendil">github</a> /
    <a href="https://discord.gg/AVsGbhzTzx">discord</a>
  </p>

  <div class="hero-text mt-5">
    {@html inner}
  </div>
</div>

<style>
  .hero {
    margin-top: 5rem;
    letter-spacing: -0.02rem;
  }

  .logo {
    height: 3rem;
  }

  h2 {
    font-weight: 500;
  }

  h1 {
    font-weight: 600;
  }

  .hero-text {
    font-size: 1.2rem;
  }

  .links {
    font-weight: 500;
  }
</style>
