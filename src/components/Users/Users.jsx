import React from "react";
import s from "./Users.module.css";
import { setCurrentPage, setUsers } from "../../redux/Reducers/usersReducer";
import Preloader from "../global components/Preloader/Preloader";
import { connect } from "react-redux";
import UserContainer from "./UserContainer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class Users extends React.Component {
  componentDidMount() {
    if (this.props.state.users.length === 0) {
      this.props.setUsers(
        this.props.state.pageUsers,
        this.props.state.currentPage
      );
      // this.props.dispatch(toggleIsLoadingAC(true));
      // axios
      //   .get(
      //     `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.pageUsers}&page=${this.props.state.currentPage}`
      //   )
      //   .then((response) => {
      //     this.props.dispatch(toggleIsLoadingAC(false));
      //     this.props.dispatch(setUsersAC(response.data.items));
      //     this.props.dispatch(setTotalUsersAC(response.data.totalCount));
      //   });
    }
  }

  // setCurrentPage = (page) => {
  //   this.props.dispatch(toggleIsLoadingAC(true));
  //   this.props.dispatch(setCurrentPageAC(page));
  //   axios
  //     .get(
  //       `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.pageUsers}&page=${page}`
  //     )
  //     .then((response) => {
  //       this.props.dispatch(toggleIsLoadingAC(false));
  //       this.props.dispatch(setUsersAC(response.data.items));
  //     });
  // };

  render() {
    const pages = Math.ceil(
      this.props.state.totalUsers / this.props.state.pageUsers
    );
    const paginationItems = [];
    let test =
      this.props.state.currentPage < 15
        ? 25
        : this.props.state.currentPage < pages - 15
        ? this.props.state.currentPage + 10
        : pages;
    for (
      let i =
        this.props.state.currentPage > 16
          ? this.props.state.currentPage - 15
          : 1;
      i <= test;
      i++
    ) {
      paginationItems.push(i);
    }
    return (
      <div className={s.usersWrapper}>
        {this.props.state.isLoading ? <Preloader /> : null}
        <div className={s.paginationBlock}>
          {this.props.state.currentPage > 16 ? (
            <>
              <span
                className={s.pagesList}
                onClick={() => {
                  this.props.setCurrentPage(this.props.state.pageUsers, 1);
                }}
              >
                {1}
              </span>
              . . .
            </>
          ) : null}
          {paginationItems.map((page) => {
            return (
              <span
                key={Math.random() + page}
                className={
                  this.props.state.currentPage === page
                    ? s.currentPage + " " + s.pagesList
                    : s.pagesList
                }
                onClick={() => {
                  this.props.setCurrentPage(this.props.state.pageUsers, page);
                }}
              >
                {page}
              </span>
            );
          })}
          {this.props.state.currentPage < pages - 15 ? (
            <>
              . . .{" "}
              <span
                className={s.pagesList}
                onClick={() => {
                  this.props.setCurrentPage(this.props.state.pageUsers, pages);
                }}
              >
                {pages}
              </span>
            </>
          ) : null}
        </div>
        <div className={s.title}>Users</div>
        <div className={s.usersBlock}>
          {this.props.state.users.map((user) => (
            <UserContainer key={user.id + Math.random()} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default withAuthRedirect(
  connect(mapStateToProps, { setUsers, setCurrentPage })(Users)
);
