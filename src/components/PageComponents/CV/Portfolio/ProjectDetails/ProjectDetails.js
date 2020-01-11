import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import camelCase from 'lodash/camelCase';
import findIndex from 'lodash/findIndex';

import { dateToAttr } from '../../../../../utils/utils';
import { getImage, getSlug, TARGET } from '../ProjectImages/ProjectImages';
import FontIcon from '../../../../UI/FontIcon/FontIcon';
import {
  ALL,
  NEXT,
  PREV
} from '../../../../UI/FontIcon/FontIconTypes/FontIconsTypes';
import Image from '../../../../UI/Image/Image';
import classes from './ProjectDetails.scss';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    const projectsData = props.i18n.store.data.en.portfolio.works;
    const id = camelCase(props.match.params.project);
    const index = findIndex(projectsData, project => project.id === id) || 0;
    this.state = {
      id,
      index,
      projectData: projectsData[index],
      routes: ProjectDetails.getRoutes(projectsData, index)
    };
    this.header = React.createRef();
  }

  componentDidMount() {
    this.header.current.focus();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextId = camelCase(nextProps.match.params.project);
    if (nextId !== prevState.id) {
      const projectsData = nextProps.i18n.store.data.en.portfolio.works;
      const index =
        findIndex(projectsData, project => project.id === nextId) || 0;

      return {
        id: nextId,
        index,
        projectData: projectsData[index],
        routes: ProjectDetails.getRoutes(projectsData, index)
      };
    }

    return prevState;
  }

  getData = () => {
    const data = {};
    const { index, projectData } = this.state;
    const { t } = this.props;

    Object.keys(projectData).forEach(key => {
      data[key] = t(`works.${index}.${key}`, {
        returnObjects: true
      });
    });

    return data;
  };

  static getRoutes = (projectsData, index) => {
    const { length } = projectsData;
    const routes = {};
    let prevIndex = index - 1;
    let nextIndex = index + 1;

    if (index === 0) {
      prevIndex = length - 1;
    }
    if (index === length - 1) {
      nextIndex = 0;
    }

    routes.prev = `/portfolio/${getSlug(prevIndex)}`;
    routes.next = `/portfolio/${getSlug(nextIndex)}`;

    return routes;
  };

  render() {
    const {
      description,
      codeURL,
      endDate,
      name,
      projectURL,
      startDate,
      technologies,
      type
    } = this.getData();
    const {
      id,
      routes: { next, prev }
    } = this.state;
    const { t } = this.props;
    const { src, srcSet, imageAlt } = getImage(id, TARGET.DETAILS);
    const projectDate = (
      <span>
        <time dateTime={dateToAttr(startDate)}>{startDate}</time>
        {endDate !== startDate && (
          <time dateTime={dateToAttr(endDate)}>{`-${endDate}`}</time>
        )}
      </span>
    );
    const {
      Description,
      Details,
      Links,
      Project,
      ProjectsNav,
      Technologies
    } = classes;

    return (
      <div className={Details}>
        <h4 ref={this.header} tabIndex={-1}>
          {name}
        </h4>
        <div className={ProjectsNav}>
          <nav>
            <Link to={prev}>
              <FontIcon iconType={PREV} />
            </Link>
            <Link to="/portfolio">
              <FontIcon iconType={ALL} />
            </Link>
            <Link to={next}>
              <FontIcon iconType={NEXT} />
            </Link>
          </nav>
        </div>

        <div className={Project}>
          <Image
            src={src}
            srcSet={srcSet}
            sizes="100vw"
            alt={imageAlt}
            imageClass="Project"
          />
          <div className={Description}>
            <h5>{type}</h5>
            <p>{projectDate}</p>
            <h5>{t('labels.technologies')}</h5>
            <ul className={Technologies}>
              {technologies.map(technology => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <h5>{t('labels.description')}</h5>
            <p>{description}</p>
            <div className={Links}>
              {projectURL && (
                <a
                  href={projectURL}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={t('labels.visitArea', {
                    name
                  })}
                >
                  {t('labels.visit')}
                </a>
              )}
              {codeURL && (
                <a
                  href={codeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('labels.codeAria', {
                    name
                  })}
                >
                  {t('labels.code')}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation('portfolio')(ProjectDetails);
