import * as S from "./page3.styles";

export default function Page3UI() {
  return (
    <S.Wrapper>
      <S.Skill>
        <S.Title>Skill</S.Title>
        <S.Hr />
        <S.SkillIconBox>
          <S.SkillIcon src="/skill/yarn.png" />
          <S.SkillIcon src="/skill/git.png" />
          <S.SkillIconBox>
            <S.SkillIcon src="/skill/github.png" style={{ height: "30px" }} />
            <S.SkillIcon
              src="/skill/githubText.png"
              style={{ marginLeft: "10px", height: "25px" }}
            />
          </S.SkillIconBox>
          <S.SkillIcon src="/skill/npm.png" />
          <S.SkillIcon src="/skill/docker.png" />
          <S.SkillIcon src="/skill/gcp-logo.png" />
          <S.SkillIcon src="/skill/html5.png" />
          <S.SkillIcon src="/skill/css3.png" />
          <S.SkillIcon src="/skill/nodejs.png" />
          <S.SkillIcon src="/skill/javascript.png" />
          <S.SkillIcon src="/skill/typescript.png" />
        </S.SkillIconBox>
      </S.Skill>
    </S.Wrapper>
  );
}
