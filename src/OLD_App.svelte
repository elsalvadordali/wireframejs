<script lang="ts">
  import Header from "./components/Header.svelte";
  import Img from "./components/Img.svelte";
  import P from "./components/P.svelte";
  import Card from "./components/Card.svelte";
  import Modulus from "./components/Modulus.svelte";
  import Input from "./components/Input.svelte";

  let info = "";

  function display(e) {
    let t = e.target;

    while (!t.classList.contains("parent")) {
      console.log(t.classList);
      t = t.parentElement;
      if (t.nodeName == "body") return;
    }
    console.log("winner", t);

    let classList = Array.from(t.classList);
    console.log(classList);
    info = classList
      .filter(
        (n) =>
          n == "p" ||
          n == "img" ||
          n == "card" ||
          n == "button" ||
          n == "input" ||
          n == "article"
      )
      .join("");
  }
</script>

<main>
  <h2>Wireframe for Svelte</h2>
  <p>
    Wireframe is a programmatic way to create mobile wireframes. AKA figma for
    developers.
  </p>
  <h3>Click on a component below to get started</h3>
  <div
    class="container"
    on:click={(e) => display(e)}
    on:keypress={(e) => console.log("sorry. Need to click on something")}
  >
    <P length="short" />
  </div>
  {#if info}
    <div class="info" on:click={(e) => console.log(e.target)} on:keypress={() => console.log('ok')}>
      <div class="text">
        {#if info == "p"}
          <h3>P</h3>
          <p>
            Simulates paragraphs. Note that word and paragraph lengths are
            variable. No two paragrahs of the same size look the same
          </p>

          <h4>Parameters</h4>
          <div class="snippet">
            <code>
              {"<"}P length='short' /{">"}
            </code>
            <P length="short" />
          </div>
          <div class="snippet">
            <code>
              {"<"}P length='medium' /{">"}
            </code>
            <P length="medium" />
          </div>
          <div class="snippet">
            <code>
              {"<"}P length='long' /{">"}
            </code>
            <P length="long" />
          </div>
          {:else if info == 'card'}
          <h3>Card</h3>
          <p>
          A card display info  in an easy-to-digest way.
          </p>
          <h4>Parameters</h4>
          <div class="snippet">
            <code>
              {"<"}Card length='long' /{">"}
            </code>
            <P length="long" />
          </div>
          {/if}
      </div>
    </div>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding-top: 4rem;
  }
  .container {
    border: 2px solid black;
    width: 375px;
    height: 667px;
    overflow-y: scroll;
  }
  code {
    border: 2px solid black;
    padding: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    min-width: 40%;
    width: fit-content;
    font-family: monospace;
  }
  .info {
    position: fixed;
    z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #000;
      filter: drop-shadow(0 0 20px #333);
  }
  .text {
    width: 100%;
    min-width: 360px;
    background-color: #fff;
    padding: 2rem;
  }
  .snippet {
    display: flex;
    flex-flow: row nowrap;
  }
</style>
