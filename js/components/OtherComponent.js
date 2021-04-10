export default {
    name: "OtherVideo",

    data() {
        return {
            videoname: "Eternal Sunshine of a Spotless Mind",
            videosource: "images/spotless_mind.mp4",
            videosubs: "images/spotless_mind.vtt",
            nextsuggestion: "/", // loop again in database?
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
                    CLEMENTINE<br>
                    How far are you going? On the train, I
                    mean, of course. Not in life.<br>

                    JOEL<br>
                    Rockville Center.<br>

                    CLEMENTINE<br>
                    Get out! Me too! What are the odds?<br>
                    Do I know you?<br>

                    JOEL<br>
                    I don't think so.<br>

                    CLEMENTINE<br>
                    Hmmmm. Do you ever shop at Barnes and
                    Noble?<br>

                    JOEL<br>
                    Sure.<br>

                    CLEMENTINE<br>
                    That's it. That's me: book slave there
                    for, like, five years now. I thought I'd
                    seen you somewhere.<br>

                    JOEL<br>
                    Really? Because --<br>

                    CLEMENTINE<br>
                    Jesus, is it five years? I gotta quit
                    right now.<br>

                    JOEL<br>
                    -- I go there all the time. I think I'd
                    remember you.<br>

                    CLEMENTINE<br>
                    Well, I'm there. I've seen you, man.<br>
                    Might be the hair.<br>
                </article>
            </div>
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
