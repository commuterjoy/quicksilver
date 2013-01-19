
```
# Generate some lists of stories
node log_front_order.js 

# Fetch the story packages
cut -f 1 data/front.txt | uniq | node discover_packages.js 

# View how the story package has changed over time
node diff.js < data/items/world_2013_jan_17_delhi-gang-rape-fast-track
```

## Notes

- Q. Who writes these things?
- Q. What determines length of the story package
- Q. What determines if an article gets grouped in to a package
- Q. Who makes these things? What are the good/bad.
- Q. How does maintenance happen out of hours, weekends etc.
- Q. What is the life-cycle of a package? How long is it maintained? Does that correlate to usage?
- Q. Why no package on some stories, Eg. aaron-swartz-suicide-girlfriend-internet-reddit
- Q. Why different packages on same series of events, Eg.
      sport_2013_jan_18_lance-armstrong-admits-doping-oprah-winfrey,
      sport_2013_jan_18_lance-armstrong-doping-admission, 
      sport_2013_jan_19_lance-armstrong-oprah-winfrey-second-interview
- Q. Why this selection, in this order?

```
2013-01-18T16:46:47.049Z        sport/2013/jan/18/lance-armstrong-admits-doping-oprah-winfrey
2013-01-18T16:46:47.049Z        sport/2013/jan/17/lance-armstrong-oprah-winfrey-interview-live-blog
2013-01-18T16:46:47.049Z        sport/2013/jan/18/lance-armstrong-confession-fword-flawed
2013-01-18T16:46:47.049Z        sport/2013/jan/18/lance-armstrong-doping-denials-quotes
2013-01-18T16:46:47.049Z        sport/2013/jan/18/lance-armstrong-oprah-winfrey-interview
2013-01-18T16:46:47.049Z        commentisfree/2013/jan/18/oprah-winfrey-lance-armstrong-interview
2013-01-18T16:46:47.049Z        sport/2013/jan/18/lance-armstrong-denial-conspiracy-uci
2013-01-18T16:46:47.049Z        sport/2013/jan/18/lance-armstrong-drugs-betsy-andreu
2013-01-18T16:46:47.049Z        sport/2013/jan/18/lance-armstrong-wada-john-fahey
2013-01-18T16:46:47.049Z        media/2013/jan/18/sunday-times-lance-armstrong-confession-helps-case
2013-01-18T16:46:47.049Z        sport/video/2013/jan/18/lance-armstrong-interview-quotes-video
2013-01-18T16:46:47.049Z        sport/video/2013/jan/18/lance-armstrong-journalist-doping-video
2013-01-18T16:46:47.049Z        sport/video/2013/jan/18/lance-armstrong-masseuse-doping-video
2013-01-18T16:46:47.049Z        sport/video/2013/jan/18/lance-armstrong-tour-down-under-video
2013-01-18T16:46:47.049Z        sport/video/2013/jan/18/lance-armstrong-interview-uci-video
2013-01-18T16:46:47.049Z        sport/gallery/2013/jan/18/lance-armstrong-oprah-interview-gallery
2013-01-18T16:46:47.049Z        sport/blog/poll/2013/jan/18/lance-armstrong-interview-oprah-winfrey-poll
2013-01-18T16:46:47.049Z        sport/2013/jan/18/lance-armstrong-interview-what-we-learned
```
