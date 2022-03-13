import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as moment from 'moment';
import 'moment-duration-format';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import "./style.scss";

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



const ScoreBlock = ({colorPercent, props}) => {
    return   <div className="percents" style={
        {
            color: colorPercent(props.item.score),
            border: `1px solid ${colorPercent(props.item.score)}`
        }
    }>
        {props.item.score}%
    </div>
}

const HistoryCard = (props) => {

    const formattedDate = moment.duration(props.item.publishTime, "minutes").format("h[h] m[m]");

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const colorPercent = (color) => {
        if (color > 50) {
            return "#4eb495";
        } else if (color > 40) {
            return "#ffb300";
        } else {
            return "#ef6c00";
        }

    }
    return (

        <Card className='card-block'>
            <div className="card-wrapper">
                <div className="card-image">
                    <img src={props.item.domain_cached_large_logo_url} alt="image"/>
                </div>
                <div className="main-history">

                    <div className="history-wrapper">
                        <div className="history-left">
                            <a href={props.item.url} target={'_blank'}>
                                {props.item.title}
                            </a>

                        </div>
                    </div>

                    <div className={expanded ? 'left-down expanded' : 'left-down hidden'}>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    {props.item.description}
                                </Typography>

                                {expanded && <>
                                    <div className="mini-image">
                                        <img src={props.item.domain_cached_logo_url} alt=""/>
                                        <p>{props.item.domain_name}</p>
                                        <p>{formattedDate}</p>
                                    </div>

                                </>}
                            </CardContent>
                        </Collapse>

                        {
                            !expanded && <>
                                <div className="mini-image">
                                    <img src={props.item.domain_cached_logo_url} alt=""/>
                                    <p>{props.item.domain_name}</p>
                                    <p>{formattedDate}</p>
                                </div>

                            </>
                        }
                    </div>

                    <div className='mobile-score'>
                        <ScoreBlock colorPercent={colorPercent} props={props} />
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon/>
                        </ExpandMore>
                    </div>

                </div>
                <div className="history-right">

                    <ScoreBlock colorPercent={colorPercent} props={props} />

                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </ExpandMore>


                </div>
            </div>
            <div className='actions-buttons'>
                {expanded && <CardActions>

                    <IconButton aria-label="thumb-up">
                        <ThumbUpOutlinedIcon/>
                    </IconButton>
                    <span>Like</span>

                    <IconButton aria-label="thumb-down">
                        <ThumbDownOffAltOutlinedIcon/>
                    </IconButton>
                    <span>Dislike</span>

                    <IconButton aria-label="thumb-down">
                        <BookmarkBorderOutlinedIcon/>
                    </IconButton>
                    <span>Bookmark</span>

                </CardActions>}

            </div>


        </Card>
    );
}

export default HistoryCard;