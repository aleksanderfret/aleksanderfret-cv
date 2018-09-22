import React, { Component } from 'react';
import { translate } from 'react-i18next';
import camelCase from 'lodash/camelCase';
import findIndex from 'lodash/findIndex';
import { dateToAttr } from '../../../../../utils/utils';
import { getImage, TARGET } from '../ProjectImages/ProjectImages';
import Image from '../../../../UI/Image/Image';
import classes from './ProjectDetails.scss';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    const projectsData = this.props.i18n.store.data.en.portfolio.works;
    this.id = camelCase(this.props.match.params.project);
    this.index = findIndex(projectsData, project => project.id === this.id) || 0;
    this.projectData = projectsData[this.index];
    this.header = React.createRef();
  }

  getData = () => {
    const data = {};
    for (const key in this.projectData) {
      data[key] = this.props.t(`works.${this.index}.${key}`, { returnObjects: true });
    }
    return data;
  }

  componentDidMount() {
    this.header.current.focus();
  }

  render() {
    const data = this.getData();
    const image = getImage(this.id, TARGET.DETAILS);
    const projectDate = (<span>
      <time dateTime={dateToAttr(data.startDate)}>{data.startDate}</time>
      {data.endDate !== data.startDate &&
        <time dateTime={dateToAttr(data.endDate)}>{`-${data.endDate}`}</time>
      }
    </span>);
    return (
      <div className={classes.Details}>
        <h4
          ref={this.header}
          tabIndex={-1}>{data.name}</h4>
        <div className={classes.Project}>
          <Image
            src={image.src}
            srcSet={image.srcSet}
            sizes='100vw'
            alt={data.imageAlt}
            imageClass='Project' />
          <div className={classes.Description}>
            <h5>{data.type}</h5>
            <p>{projectDate}</p>
            <h5>{this.props.t('labels.technologies')}</h5>
            <ul className={classes.Technologies}>
              {data.technologies.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
            <h5>{this.props.t('labels.description')}</h5>
            <p>{data.description}</p>
            <div class={classes.Links}>
              {data.projectURL &&
                <a
                  href={data.projectURL}
                  target="_blank"
                  aria-label={this.props.t('labels.visitArea', { name: data.name })}>
                  {this.props.t('labels.visit')}
                </a>
              }
              {data.codeURL &&
                <a
                  href={data.codeURL}
                  target="_blank"
                  aria-label={this.props.t('labels.codeAria', { name: data.name })}>
                  {this.props.t('labels.code')}
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default translate('portfolio')(ProjectDetails);

