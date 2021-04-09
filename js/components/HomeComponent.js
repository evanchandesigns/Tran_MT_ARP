export default {
    name: "HomeVideo",

    data() {
        return {
            videoname: "A Marriage Story - Season 2, Episode 1",
            videosource: "images/marriage_story.mp4",
            videosubs: "images/marriage_story.vtt",
            nextsuggestion: "/sunshine", // next id in database?,
            showTranscript: false

        }
    },

    template: `
        <div class="videoArea">
            <h2>{{ videoname }}</h2>
            <video controls :title="videoname">
                <source :src="videosource">
                <track :src="videosubs" kind="captions" srclang="en" label="English">
            </video>
            <div class="buttonsArea">
                <button class="nextButton" @click="showBox" v-if="!showTranscript">View Transcript</button>
                <button class="nextButton" @click="showBox" v-else>Hide Transcript</button>
                <router-link :to="nextsuggestion" class="nextButton">Next on Roku >></router-link></button>
            </div>
            <div class="transcriptBox" v-if="showTranscript">
                <article class="lyricsBox">
                NICOLE<br>
                You’re being so much like your
                father.<br>

                CHARLIE<br>
                DO NOT compare me to my father.<br>

                NICOLE<br>
                I didn’t compare you. I said you
                were acting like him.
                120.<br>

                CHARLIE<br>
                You’re exactly like your mother!
                Everything you complain about her,
                you’re doing. You’re suffocating
                Henry.<br>

                NICOLE<br>
                First of all, I love my
                mother, she was a great
                mother!<br>

                CHARLIE<br>
                I’m just repeating what
                you’ve told me--<br>

                NICOLE<br>
                Secondly, how dare you compare my
                mothering to my mother? I might
                be like my father, but I’m NOT
                like my mother.<br>

                CHARLIE<br>
                You ARE! And you’re like my
                father. You’re also like MY
                mother. You’re all the bad things
                about all of these people.<br>
                </article>
            </div>
        </div>
    `,

    methods: {
        showBox() {
            if (this.showTranscript) {
                this.showTranscript = false;
            } else {
                this.showTranscript = true;
            }
        }
    }
}
