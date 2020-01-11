import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import camelCase from "lodash/camelCase";
import findIndex from "lodash/findIndex";
import { dateToAttr } from "../../../../../utils/utils";
import { getImage, getSlug, TARGET } from "../ProjectImages/ProjectImages";
import FontIcon from "../../../../UI/FontIcon/FontIcon";
import * as icons from "../../../../UI/FontIcon/FontIconTypes/FontIconsTypes";
import Image from "../../../../UI/Image/Image";
import classes from "./ProjectDetails.scss";

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    const projectsData = this.props.i18n.store.data.en.portfolio.works;
    const id = camelCase(this.props.match.params.project);
    const index = findIndex(projectsData, project => project.id === id) || 0;
    this.state = {
      id,
      index,
      projectData: projectsData[index],
      routes: ProjectDetails.getRoutes(projectsData, index)
    };
    this.header = React.createRef();
  }

  getData = () => {
    const data = {};
    for (const key in this.state.projectData) {
      data[key] = this.props.t(`works.${this.state.index}.${key}`, {
        returnObjects: true
      });
    }
    return data;
  };

  static getRoutes = (projectsData, index) => {
    const length = projectsData.length;
    let prevIndex = index - 1;
    let nextIndex = index + 1;
    if (index === 0) {
      prevIndex = length - 1;
    }
    if (index === length - 1) {
      nextIndex = 0;
    }
    const routes = {};
    routes.prev = `/portfolio/${getSlug(prevIndex)}`;
    routes.next = `/portfolio/${getSlug(nextIndex)}`;
    return routes;
  };

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

  render() {
    const data = this.getData();
    const image = getImage(this.state.id, TARGET.DETAILS);
    const projectDate = (
      <span>
        <time dateTime={dateToAttr(data.startDate)}>{data.startDate}</time>
        {data.endDate !== data.startDate && (
          <time dateTime={dateToAttr(data.endDate)}>{`-${data.endDate}`}</time>
        )}
      </span>
    );
    return (
      <div className={classes.Details}>
        <h4 ref={this.header} tabIndex={-1}>
          {data.name}
        </h4>
        <div className={classes.ProjectsNav}>
          <nav>
            <Link to={this.state.routes.prev}>
              <FontIcon iconType={icons.PREV} />
            </Link>
            <Link to="/portfolio">
              <FontIcon iconType={icons.ALL} />
            </Link>
            <Link to={this.state.routes.next}>
              <FontIcon iconType={icons.NEXT} />
            </Link>
          </nav>
        </div>

        <div className={classes.Project}>
          <Image
            src={image.src}
            srcSet={image.srcSet}
            sizes="100vw"
            alt={data.imageAlt}
            imageClass="Project"
          />
          <div className={classes.Description}>
            <h5>{data.type}</h5>
            <p>{projectDate}</p>
            <h5>{this.props.t("labels.technologies")}</h5>
            <ul className={classes.Technologies}>
              {data.technologies.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
            <h5>{this.props.t("labels.description")}</h5>
            <p>{data.description}</p>
            <div className={classes.Links}>
              {data.projectURL && (
                <a
                  href={data.projectURL}
                  target="_blank"
                  aria-label={this.props.t("labels.visitArea", {
                    name: data.name
                  })}
                >
                  {this.props.t("labels.visit")}
                </a>
              )}
              {data.codeURL && (
                <a
                  href={data.codeURL}
                  target="_blank"
                  aria-label={this.props.t("labels.codeAria", {
                    name: data.name
                  })}
                >
                  {this.props.t("labels.code")}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation("portfolio")(ProjectDetails);
