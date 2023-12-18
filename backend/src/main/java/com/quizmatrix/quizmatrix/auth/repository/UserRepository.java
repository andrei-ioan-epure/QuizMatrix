package com.quizmatrix.quizmatrix.auth.repository;

import com.quizmatrix.quizmatrix.auth.model.User;
import jakarta.transaction.Transactional;
import org.mapstruct.control.MappingControl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Transactional
    @Modifying
    @Query("update User u set u.role=com.quizmatrix.quizmatrix.auth.util.Constant$UserRole.ADMIN where u.id_user=?1")
    Integer makeAdmin(Integer id);

    Optional<User> findUserByEmail(String email);
}
