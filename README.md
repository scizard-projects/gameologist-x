# The Gameologist

<div align="center">
  <img src="https://play-lh.googleusercontent.com/qA-PQEzpyVG1ocapP5I-ptaZXW52Qd4yKsUPPxIpemh2V_K64B3Lm6q_p2g_ddyn7QQ=w100-h200-rw" alt="The Gameologist Logo">
</div>

**Dive into the World of Gaming: Stay Informed, Stay Entertained!**

Your gaming news hub for Xbox, PlayStation, Nintendo, and more. Dive into action, role-play, strategy, puzzles, etc., with us.

## Screenshots

##### Home:

![Home Screen](https://play-lh.googleusercontent.com/9uxNbZhm1rBG_fWjmLGNlseaCrGNb271T2oyghvXa0Sr0OeQ2UjdpscCzmgl9kNgsUl6=w526-h296-rw)

##### Story:

![Gameplay Screen](https://play-lh.googleusercontent.com/z0BynaAFtSNYAnkvmGPXfdMYixBQBgfqmMybVn4R5ZdOvZRDK3nXevgajqk9pz8Y1Qe1=w526-h296-rw)

## App Links

- **Download from [Google Play Store](https://play.google.com/store/apps/details?id=com.newslogist.gameologist)**
- **Coming soon on the App Store**

## Getting Started

> **Note**: Ensure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions up to the "Creating a new application" step before proceeding.

To run this project on your local machine, follow these steps:

### Step 1: Clone the Repository

```bash
git clone https://github.com/scizard-projects/gameologist.git
cd gameologist
```

## Step 2: Install node modules

```bash
npm install
```

## Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
npm start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
npm run android
```

### For iOS

```bash
npm run ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run the app. :partying_face:

## Topics

In The Gameologist each article is associated with one or more topics, allowing readers to easily explore content that aligns with their gaming interests and preferences:

Atari, Board Game, Business, Console, Facts, Gamer, Inspiration, Insight, Microsoft, Movies & TV, Nintendo, PlayStation, Report, Retro, Review, Sale, Sega, Secrets, Streamer, Tips & Tricks, Upcoming

## To-Do List

This is a to-do list of tasks that need to be done. Each task is represented as a checkbox that can be marked as completed once it's done.

- [ ] Implement Fonts similar to the ones used by the [New York Times]

- [ ] Fine-tune text size across the entire application

- [ ] Define Schema (Topics and Categories)

- [x] Choose a Domain: gameologist.scizard.com / [gameologist.app](https://www.gameologist.app/)

- [ ] Implement Universal Linking

- [ ] Enhance Embeds: Include support for headings, bold, lists, italics, social embeds, etc.

- [ ] Optimize Touchable Opacity: Replace with a custom button for Android and iOS, implementing a delay after click.

- [x] Migrate from Firebase to Sanity

- [x] Update Android package name to `com.scizard.gameologist`

- [ ] Prepare iOS Build

- [ ] Integrate Redux Middleware for tracking Redux action events. Reference: https://github.com/devhubapp/devhub/blob/62601ebbd55e43a75936d614808eb00f89d21daa/packages/components/src/redux/middlewares/analytics.ts.

## Story Schema

A story in The Gameologist follows this structured schema:

- `id`: Unique identifier for the story (string).
- `title`: The title of the story (string).
- `titleLowerCase`: The lowercase version of the title for easy comparisons and indexing, especially useful for search functionality (string).
- `description`: A short narrative or summary of the story (string).
- `content`: The main content or body of the story (string).
- `createdAt`: The timestamp indicating when the story was created.
- `image`: URL of an image associated with the story (string).
- `imageCredit`: The credit or source of the image (string).
- `video`: URL of video content related to the story (string).
- `topic`: The topic or topics associated with the story (string or array of strings).
- `active`: A flag indicating whether the story is active or not (boolean).
- `source`: The source URL from where the story originated (string).

## Contributing

Feel free to contribute to this project by adding new tasks, fixing existing ones, or suggesting improvements to the documentation or the codebase. To do so, you can create a pull request on GitHub, or open an issue if you have a question or a bug report.

## Feedback and Issues

For feedback, suggestions, or reporting issues, please open an [issue](https://github.com/scizard-projects/gameologist.git/issues).
